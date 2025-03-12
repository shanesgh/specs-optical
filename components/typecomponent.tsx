"use client";

import { TypeAnimation } from "react-type-animation";

export const HomeTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "The best service",
        4000,
        "The best products",
        4000,
        "Eyewear you can depend on!",
        4000,
        "Specs Optical and Eyewear Limited",
        20000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: "1em" }}
      repeat={Infinity}
    />
  );
};
