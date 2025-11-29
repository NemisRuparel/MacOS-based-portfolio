import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, def: 200 },
  title: { min: 100, max: 800, def: 400 }
};

const renderText = (text, className, baseWeight) => {
  const weight = baseWeight !== undefined ? baseWeight : FONT_WEIGHTS.title.def;
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${weight}`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, def } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    const clampedWeight = Math.max(min, Math.min(max, weight));
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${clampedWeight}`,
    });
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const letterCenterX = l + w / 2;
      const distance = Math.abs(mouseX - letterCenterX);
      const intensity = Math.exp(-(distance ** 2) / 30000);
      const targetWeight = min + (max - min) * intensity;
      animateLetter(letter, targetWeight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, def);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const cleanupTitle = setupTextHover(titleRef.current, "title");
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      cleanupTitle();
      cleanupSubtitle();
    };
  }, []);

  return (
    <section id="welcome" className="min-h-screen flex flex-col justify-center items-center">
      <p ref={subtitleRef}>
        {renderText("Hey, I'm Nemis! Welcome to my", "text-3xl font-georama", FONT_WEIGHTS.subtitle.def)}
      </p>

      <h1 ref={titleRef}>
        {renderText("portfolio", "text-9xl italic font-georama", FONT_WEIGHTS.title.def)}
      </h1>

      <div className="small-screen">
        <p>Sorry..! This Portfolio is designed for desktop/tablet screens only..!</p>
      </div>
    </section>
  );
};

export default Welcome;
