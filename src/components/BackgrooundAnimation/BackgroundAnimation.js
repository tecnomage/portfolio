import React from "react";
import { useDarkMode } from "next-dark-mode";
import { AnimatedSvgWrapper } from "./BackgroundAnimationStyles";

const BackgroundAnimation = () => {
  const { darkModeActive } = useDarkMode();

  return (
    <AnimatedSvgWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="400"
        height="400"
      >
        <defs>
          {/* <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: darkModeActive ? "#1a1a1a" : "#f8f9fa", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: darkModeActive ? "#2d2d2d" : "#e9ecef", stopOpacity: 1 }} />
          </linearGradient> */}
          
          <filter id="subtle-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="url(#grad1)" />

        {/* Geometric pattern */}
        <g stroke={darkModeActive ? "#ffffff22" : "#00000022"} strokeWidth="1">
          <line x1="0" y1="100" x2="200" y2="100" />
          <line x1="100" y1="0" x2="100" y2="200" />
          <path d="M100,20 Q180,50 100,180 Q20,50 100,20" fill="none" />
        </g>

        {/* Concentric circles */}
        <g stroke={darkModeActive ? "#ffffff44" : "#00000044"} fill="none" strokeWidth="1.5">
          <circle cx="100" cy="100" r="85">
            <animate attributeName="r" values="85;90;85" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="100" r="65">
            <animate attributeName="r" values="65;70;65" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="100" r="45">
            <animate attributeName="r" values="45;50;45" dur="6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Central hexagon */}
        <path
          d="M100,40 L140,70 L140,130 L100,160 L60,130 L60,70 L100,40"
          fill="none"
          stroke={darkModeActive ? "#ffffff" : "#000000"}
          strokeWidth="1.2"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Text elements */}
        <g
          fontFamily="'Roboto', sans-serif"
          fontWeight="300"
          fill={darkModeActive ? "#ffffff" : "#2d2d2d"}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <text x="50%" y="40%" fontSize="16" opacity="0.9">
            <tspan x="50%" dy="0">DEVELOP</tspan>
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="4s"
              repeatCount="indefinite"
            />
          </text>
          
          <text x="50%" y="60%" fontSize="14" opacity="0.85" letterSpacing="1.5">
            <tspan x="50%" dy="0">ANALYZE</tspan>
            <animate
              attributeName="opacity"
              values="0.7;0.9;0.7"
              dur="4s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </text>
          
          <text x="50%" y="80%" fontSize="12" opacity="0.8">
            <tspan x="50%" dy="0">ITERATE</tspan>
            <animate
              attributeName="opacity"
              values="0.6;0.8;0.6"
              dur="4s"
              repeatCount="indefinite"
              begin="1s"
            />
          </text>
        </g>
      </svg>
    </AnimatedSvgWrapper>
  );
};

export default BackgroundAnimation;