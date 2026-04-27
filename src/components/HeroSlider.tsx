"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  learnMoreLink: string;
  getInTouchLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Consultancy",
    description:
      "We provide expert consultancy services to implement comprehensive management systems tailored for your organization in full compliance with ISO standards. Our experienced consultants guide you through every step of the certification process.",
    image: "/banners/img1.webp",
    learnMoreLink: "/iso-certification-in-uae",
    getInTouchLink: "/contact",
  },
  {
    id: 2,
    title: "Training",
    description:
      "We conduct specialized training programs for internal auditors, awareness sessions, and customized training on Management Systems and Business Concepts. Empower your team with the knowledge needed for successful certification and ongoing compliance.",
    image: "/banners/img2.webp",
    learnMoreLink: "/iso-training-uae",
    getInTouchLink: "/contact",
  },
  {
    id: 3,
    title: "IT Services",
    description:
      "We offer comprehensive IT solutions including ERP software (SAP), predictive analytics, Oil & Gas logistics, Banking systems, Payment solutions, Mobility platforms, and IoT implementations. Transform your business with cutting-edge technology.",
    image: "/banners/img3.webp",
    learnMoreLink: "/iso-certification-services-uae",
    getInTouchLink: "/contact",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const getBackgroundColor = (index: number) => {
    const colors = ["#295e8f", "#2a7a9d", "#1e5a7a"];
    return colors[index];
  };

  return (
    <div
      className="w-full relative group overflow-hidden"
      style={{ height: "600px" }}
    >
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: getBackgroundColor(index) }}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
            quality={index === 0 ? 75 : 60}
            {...(index === 0 && { fetchPriority: "high" as const })}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(41, 94, 143, 0.3), rgba(30, 64, 175, 0.6), rgba(15, 23, 42, 0.8))",
            }}
          ></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="ml-auto max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href={slide.learnMoreLink}
                    className="px-8 py-3 text-white rounded-lg hover:opacity-90 transition-colors font-semibold inline-block"
                    style={{ backgroundColor: "#ee991a" }}
                  >
                    Learn More →
                  </Link>
                  <Link
                    href={slide.getInTouchLink}
                    className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold inline-block"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
      >
        <MdKeyboardArrowLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
      >
        <MdKeyboardArrowRight className="w-8 h-8" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
