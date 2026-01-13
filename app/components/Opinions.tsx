"use client";
import React, { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

type Review = {
  name: string;
  rating: number;
  text: string;
};

export function Opinions() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Błąd wczytywania opinii:", err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    if (reviews.length <= cardsPerView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [reviews.length, cardsPerView]);

  return (
    <section
      id="opinions"
      className="w-full py-16 bg-bone flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <h2 className="text-4xl text-graphite1 md:text-5xl font-semibold text-bone2 underline decoration-1 underline-offset-8 mb-12">
        Opinie
      </h2>

      <div
        ref={containerRef}
        className="w-full max-w-6xl px-6"
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            minHeight: "340px",
          }}
          onTransitionEnd={() => {
            if (currentIndex > reviews.length) {
                setCurrentIndex(0);
                const slider = containerRef.current?.firstElementChild as HTMLElement;
                if (slider) {
                    slider.style.transition = "none";
                    slider.offsetHeight;
                    slider.style.transition = "transform 0.7s ease-in-out";
                }
            }
          }}
        >
          {[...reviews, ...reviews.slice(0, cardsPerView)].map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2 flex items-stretch"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              {/* <div className="bg-white/10 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:bg-white/20"> */}
              <div className="bg-white/10 p-6 rounded-2xl shadow-lg transition ease-linear delay-300 duration-300 hover:scale-110">
                <div className="flex justify-center mb-3">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="text-yellow-400 fill-yellow-400"
                      size={18}
                    />
                  ))}
                </div>
                <p className="italic">“{r.text}”</p>
                <p className="mt-4 text-bone text-sm font-semibold">
                  – {r.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
