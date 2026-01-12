"use client";

import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface Testimonial {
  id: number;
  text: string;
  author?: string;
  company?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Excellent service. Thanks to WIZMS team for giving quality ISO 9001 & FSMS 22000 certification and implementation services.",
    rating: 5,
  },
  {
    id: 2,
    text: "Absolutely professional, I have received quality FSMS certification for my organization in a short time. Excellent services and quick process. Thanks a lot to wizms team.",
    rating: 5,
  },
  {
    id: 3,
    text: "Thanks to Wizms team. We got ISO 22000 certifications for food quality in 6 weeks, excellent service. Overall satisfied and very happy with your services.",
    rating: 5,
  },
  {
    id: 4,
    text: "Thank you very much for getting ISO 9001 certifications in 6 weeks. You are the right choice for getting an International Standard Certification in Dubai. Very good job. Keep it up!",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real testimonials from organizations we've helped achieve ISO
            certification
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-3xl mx-auto">
                    {/* Star Rating */}
                    <div className="flex justify-center gap-2 mb-6">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="text-2xl"
                            style={{ color: "#ee991a" }}
                          >
                            ★
                          </span>
                        ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    {testimonial.author && (
                      <div className="border-t pt-6">
                        <p className="font-bold text-gray-900">
                          {testimonial.author}
                        </p>
                        {testimonial.company && (
                          <p className="text-sm text-gray-600">
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 p-3 rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: "#295e8f", color: "white" }}
          >
            <MdNavigateBefore className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 p-3 rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: "#295e8f", color: "white" }}
          >
            <MdNavigateNext className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "w-8" : ""
                }`}
                style={{
                  backgroundColor:
                    index === currentIndex ? "#ee991a" : "#295e8f",
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
