import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ContentCarouselProps {
  items: React.ReactNode[];
}

export const ContentCarousel = ({ items }: ContentCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const width = el.clientWidth;
      const index = Math.round(el.scrollLeft / width);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="carousel-container">
      <button
        className="carousel-arrow left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <IoIosArrowBack />
      </button>

      <div className="carousel-wrapper" ref={containerRef}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>

      <button
        className="carousel-arrow right"
        onClick={handleNext}
        disabled={currentIndex === items.length - 1}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};