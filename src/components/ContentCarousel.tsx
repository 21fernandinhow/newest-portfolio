import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselItem {
  content: React.ReactNode;
  onFirstView?: () => void;
}

interface ContentCarouselProps {
  items: CarouselItem[];
}

export const ContentCarousel = ({ items }: ContentCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewedItems = useRef<Set<number>>(new Set());

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
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) scrollToIndex(currentIndex + 1);
  };

  const triggerCallbackIfFirstView = (index: number) => {
    if (!viewedItems.current.has(index)) {
      viewedItems.current.add(index);
      items[index].onFirstView?.();
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const width = el.clientWidth;
      const index = Math.round(el.scrollLeft / width);
      setCurrentIndex(index);
      triggerCallbackIfFirstView(index);
    };

    triggerCallbackIfFirstView(currentIndex);

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [currentIndex, items]);

  return (
    <div className="carousel-container">
      {currentIndex > 0 && <button className="carousel-arrow left" onClick={handlePrev}><IoIosArrowBack /> </button>}

      <div className="carousel-wrapper" ref={containerRef}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item.content}
          </div>
        ))}
      </div>

      {currentIndex < items.length - 1 && <button className="carousel-arrow right" onClick={handleNext}><IoIosArrowForward /></button>}

    </div>
  );
};