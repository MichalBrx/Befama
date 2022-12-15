import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
    ".././Relokacja.webp",
  ".././wilk.webp",
  ".././falowniki.webp"
];

let count = 0;
let slideInterval: number;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef(null);

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };

  }, []);


  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 6000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
    pauseSlider()
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
    pauseSlider()
  };

  return (
    <div ref={slideRef} className="w-full select-none relative sm:max-w-lg md:max-w-2xl">
      <div className="carousel-item relative w-full ">
        <img src={featuredProducts[currentIndex]} className="w-full " alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-slate-600 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          ❮
        </button>
        <button
          className="bg-slate-600 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          ❯
        </button>
      </div>
    </div>
  );
}