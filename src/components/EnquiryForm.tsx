"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { MdCheckCircle, MdPhone, MdEmail } from "react-icons/md";

interface EnquiryFormProps {
  serviceType?: string;
  bgColor?: string;
}

export default function EnquiryForm({
  serviceType = "ISO Certification",
  bgColor = "from-blue-500 to-blue-600",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceType,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isMounted, setIsMounted] = useState(false);

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
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || "");
    if (token && errors.recaptcha) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "",
      }));
    }
  };

  useEffect(() => {
    // Make the callback function available globally
    (window as any).handleRecaptchaChange = handleRecaptchaChange;
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
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
          service: formData.service,
          message: formData.message,
          recaptchaToken,
          formType: "enquiry",
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send enquiry");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: serviceType,
        message: "",
      });
      setRecaptchaToken("");
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error ? error.message : "Failed to send enquiry",
      });
      alert("Failed to send enquiry. Please try again.");
    }
  };

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js`} async defer />
      <div
        className={`w-full px-4 sm:px-6 lg:px-8 py-16 bg-linear-to-r ${bgColor}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Info */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Our expert consultants are ready to help you achieve your
                certification goals. Fill out the form and we'll contact you
                within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MdPhone className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <a href="tel:+971552774123" className="hover:underline">
                      +971 55 277 4123
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MdEmail className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <a
                      href="mailto:mahendran@wizms.net"
                      className="hover:underline"
                    >
                      mahendran@wizms.net
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MdCheckCircle className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Quick Response</p>
                    <p className="text-sm opacity-90">
                      We respond to all enquiries within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/30">
                <p className="text-sm opacity-75">
                  WIZMS - Your ISO Certification Partner in UAE
                </p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MdCheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your enquiry has been submitted successfully. We'll contact
                    you soon with more information.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                        placeholder="+971 55 xxx xxxx"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="ISO 9001">
                        ISO 9001 - Quality Management
                      </option>
                      <option value="ISO 14001">
                        ISO 14001 - Environmental Management
                      </option>
                      <option value="ISO 45001">
                        ISO 45001 - Health & Safety
                      </option>
                      <option value="ISO 50001">
                        ISO 50001 - Energy Management
                      </option>
                      <option value="ISO 27001">
                        ISO 27001 - Information Security
                      </option>
                      <option value="ISO 22000">ISO 22000 - Food Safety</option>
                      <option value="ISO 22301">
                        ISO 22301 - Business Continuity
                      </option>
                      <option value="ISO 41001">
                        ISO 41001 - Facility Management
                      </option>
                      <option value="Other">Other Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                      }`}
                      placeholder="Tell us about your certification needs..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div className="mb-4">
                    {isMounted && (
                      <div
                        className={`g-recaptcha ${
                          errors.recaptcha
                            ? "border border-red-500 p-2 rounded-lg"
                            : ""
                        }`}
                        data-sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                        }
                        data-callback="handleRecaptchaChange"
                      ></div>
                    )}
                    {errors.recaptcha && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.recaptcha}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MdCheckCircle className="w-5 h-5" />
                    Submit Enquiry
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll never share your information. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
