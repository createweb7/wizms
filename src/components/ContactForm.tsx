"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

declare global {
  interface Window {
    handleRecaptchaChange: (token: string | null) => void;
    grecaptcha: {
      render: (containerId: string, options: any) => void;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isMounted, setIsMounted] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Please enter a valid name" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        return !/^[\d\s+\-()]+$/.test(value) ||
          value.replace(/\D/g, "").length < 7
          ? "Please enter a valid phone number"
          : "";
      case "message":
        return value.trim().length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token || "");
    if (token && errors.recaptcha) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "",
      }));
    }
  }, [errors.recaptcha]);

  useEffect(() => {
    // Make the callback function available globally
    window.handleRecaptchaChange = handleRecaptchaChange;
    setIsMounted(true);

    // Wait for reCAPTCHA script to load with longer timeout
    const checkRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaReady(true);
      } else {
        // Exponential backoff: 100ms, 200ms, 300ms...
        setTimeout(checkRecaptcha, Math.min(100 + Math.random() * 200, 500));
      }
    };

    // Start checking after a small delay to ensure script has started loading
    const timeoutId = setTimeout(checkRecaptcha, 50);
    
    return () => clearTimeout(timeoutId);
  }, [handleRecaptchaChange]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    const fieldsToValidate = ["name", "email", "phone", "message"];

    fieldsToValidate.forEach((field) => {
      const error = validateField(
        field,
        formData[field as keyof typeof formData]
      );
      if (error) {
        newErrors[field] = error;
      }
    });

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please verify that you are not a robot";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.subject,
          message: formData.message,
          recaptchaToken: recaptchaToken,
          formType: "contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Email sent:", result);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setRecaptchaToken("");
        setErrors({});
      }, 5000);
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error ? error.message : "Failed to send message",
      });
    }
  };

  return (
    <>
      <Script 
        src="https://www.google.com/recaptcha/api.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (window.grecaptcha) {
            setRecaptchaReady(true);
          }
        }}
      />
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Thank You!
          </h3>
          <p className="text-green-700">
            Your message has been received. We&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors ${
                errors.name
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : "border-gray-300 focus:ring-orange-500 focus:border-transparent"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors ${
                errors.email
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : "border-gray-300 focus:ring-orange-500 focus:border-transparent"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors ${
                errors.phone
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : "border-gray-300 focus:ring-orange-500 focus:border-transparent"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select a subject</option>
              <option value="ISO 9001">ISO 9001 - Quality Management</option>
              <option value="ISO 14001">
                ISO 14001 - Environmental Management
              </option>
              <option value="ISO 45001">
                ISO 45001 - Occupational Health & Safety
              </option>
              <option value="ISO 27001">
                ISO 27001 - Information Security
              </option>
              <option value="Other">Other Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors ${
                errors.message
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : "border-gray-300 focus:ring-orange-500 focus:border-transparent"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="my-4">
            {isMounted && recaptchaReady && (
              <div
                className={`g-recaptcha ${
                  errors.recaptcha ? "border border-red-500 p-2 rounded-lg" : ""
                }`}
                data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                data-callback="handleRecaptchaChange"
              ></div>
            )}
            {!recaptchaReady && isMounted && (
              <div className="text-center text-gray-500 text-sm py-2">
                Loading security verification...
              </div>
            )}
            {errors.recaptcha && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {errors.recaptcha}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      )}
    </>
  );
}
