"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

const ISO_SERVICES = [
  "ISO 9001 - Quality Management",
  "ISO 14001 - Environmental Management",
  "ISO 45001 - Occupational Health & Safety",
  "ISO 27001 - Information Security",
  "ISO 22000 - Food Safety Management",
  "ISO 50001 - Energy Management",
  "ISO 41001 - Facilities Management",
  "ISO 17025 - Testing & Calibration Labs",
  "ISO 18001 - OHSAS Transition",
  "ISO 31000 - Risk Management",
  "SA 8000 - Social Accountability",
  "SEDEX - Ethical Trade Audit",
];

const COMPANY_SIZES = [
  "Startup (1-10 employees)",
  "Small (11-50 employees)",
  "Medium (51-250 employees)",
  "Large (250+ employees)",
];

const TIMELINES = [
  "Urgent (2-4 weeks)",
  "Quick (1-3 months)",
  "Standard (3-6 months)",
  "Flexible (6+ months)",
];

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_email: "",
    contact_phone: "",
    company_size: "",
    service: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    return phone.length >= 7 && phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.company_name.trim()) {
      newErrors.company_name = "Company name is required";
    }

    if (!formData.contact_email.trim()) {
      newErrors.contact_email = "Email is required";
    } else if (!validateEmail(formData.contact_email)) {
      newErrors.contact_email = "Please enter a valid email address";
    }

    if (!formData.contact_phone.trim()) {
      newErrors.contact_phone = "Phone is required";
    } else if (!validatePhone(formData.contact_phone)) {
      newErrors.contact_phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please verify that you are not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token || "");
    if (token) setErrors((prev) => ({ ...prev, recaptcha: "" }));
  }, []);

  const renderRecaptcha = useCallback(() => {
    if (
      !recaptchaContainerRef.current ||
      !(window as any).grecaptcha?.render ||
      widgetIdRef.current !== null
    ) return;

    widgetIdRef.current = (window as any).grecaptcha.render(
      recaptchaContainerRef.current,
      {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        callback: handleRecaptchaChange,
        "expired-callback": () => setRecaptchaToken(""),
      }
    );
    setRecaptchaReady(true);
  }, [handleRecaptchaChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.company_name,
          email: formData.contact_email,
          phone: formData.contact_phone,
          company: formData.company_name,
          service: formData.service,
          message: `Company Size: ${
            formData.company_size || "N/A"
          }\nTimeline: ${formData.timeline || "N/A"}\nBudget: ${
            formData.budget || "N/A"
          }\n\nAdditional Details:\n${formData.message}`,
          recaptchaToken,
          formType: "quote",
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send quote request");
      }

      setSubmitted(true);
      setFormData({
        company_name: "",
        contact_email: "",
        contact_phone: "",
        company_size: "",
        service: "",
        timeline: "",
        budget: "",
        message: "",
      });
      setRecaptchaToken("");

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setGeneralError(
        err instanceof Error ? err.message : "Failed to send quote request"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (window as any).onQuoteRecaptchaLoad = renderRecaptcha;
    if ((window as any).grecaptcha?.render) {
      renderRecaptcha();
    }
  }, [renderRecaptcha]);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onQuoteRecaptchaLoad&render=explicit"
        strategy="lazyOnload"
        onLoad={renderRecaptcha}
      />
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your ISO certification needs and we&apos;ll provide
              a personalized quote
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✅ Thank you! We&apos;ve received your quote request. Our team
                will contact you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {generalError && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold">❌ {generalError}</p>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Company Name */}
              <div>
                <label
                  htmlFor="company_name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.company_name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  disabled={isLoading}
                />
                {errors.company_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.company_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact_email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.contact_email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  disabled={isLoading}
                />
                {errors.contact_email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contact_email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact_phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  value={formData.contact_phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.contact_phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  disabled={isLoading}
                />
                {errors.contact_phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contact_phone}
                  </p>
                )}
              </div>

              {/* Company Size */}
              <div>
                <label
                  htmlFor="company_size"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Company Size
                </label>
                <select
                  id="company_size"
                  name="company_size"
                  value={formData.company_size}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  <option value="">Select Company Size</option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.service
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  disabled={isLoading}
                >
                  <option value="">Select a Service</option>
                  {ISO_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  <option value="">Select Timeline</option>
                  {TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="md:col-span-2">
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Budget Range (Optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., 10,000 - 20,000 AED"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements, current certifications, or any specific challenges..."
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                disabled={isLoading}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className="mb-6">
              <div
                ref={recaptchaContainerRef}
                className={errors.recaptcha ? "border border-red-500 p-2 rounded-lg" : ""}
              />
              {!recaptchaReady && (
                <div className="text-sm text-gray-400 py-2">
                  Loading security verification...
                </div>
              )}
              {errors.recaptcha && (
                <p className="text-red-500 text-sm mt-2">{errors.recaptcha}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : "Send Quote Request"}
              </button>
              <Link
                href="/"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              We&apos;ll review your request and contact you within 24 hours
              with a personalized quote.
            </p>
          </form>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+971 55 277 4123</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">karthiga@wizms.net</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
