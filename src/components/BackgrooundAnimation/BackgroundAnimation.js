import React from "react";
import { AnimatedSvgWrapper } from "./BackgroundAnimationStyles";

import { useDarkMode } from "next-dark-mode";

const BackgroundAnimation = () => {
  const { darkModeActive } = useDarkMode();

  return (
    <>
      {darkModeActive ? (
        <div className="hero-image">
          <svg
            className="BgAnimation__svg"
            viewBox="0 0 602 602"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.15">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
                stroke="#fff"
                id="path_0"
              />
              <path
                d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
                stroke="#fff"
                id="path_1"
              />
              <path
                d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
                stroke="#fff"
                id="path_2"
              />
            </g>
            <ellipse
              cx="295.027"
              cy="193.118"
              transform="translate(-295.027 -193.118)"
              rx="1.07306"
              ry="1.07433"
              fill="rgba(255,255,255, .5)"
            >
              <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#path_2" />
              </animateMotion>
            </ellipse>
            <path
              d="M294.685 193.474L268.932 219.258"
              transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#path_2" />
              </animateMotion>
            </path>
            <ellipse
              cx="295.027"
              cy="193.118"
              transform="translate(-295.027 -193.118)"
              rx="1.07306"
              ry="1.07433"
              fill="#46737"
            >
              <animateMotion
                dur="5s"
                begin="1"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_2" />
              </animateMotion>
            </ellipse>
            <path
              d="M294.685 193.474L268.932 219.258"
              transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="5s"
                begin="1"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_2" />
              </animateMotion>
            </path>
            
            <ellipse
              cx="476.525"
              cy="363.313"
              rx="1.07433"
              ry="1.07306"
              transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
              fill="rgba(255,255,255, .5)"
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </ellipse>
            <path
              d="M476.171 362.952L450.417 337.168"
              transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </path>
            <ellipse
              cx="382.164"
              cy="155.029"
              rx="1.07433"
              ry="1.07306"
              transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
              fill="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="10s"
                begin="1"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </ellipse>
            <path
              d="M381.81 154.669L356.057 128.885"
              transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="10s"
                begin="1"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </path>
            <ellipse
              cx="333.324"
              cy="382.691"
              rx="1.07306"
              ry="1.07433"
              transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
              fill="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="5s"
                begin="0"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_1" />
              </animateMotion>
            </ellipse>
            <path
              d="M333.667 382.335L359.42 356.551"
              transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="5s"
                begin="0"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_1" />
              </animateMotion>
            </path>
            <ellipse
              cx="165.524"
              cy="93.9596"
              rx="1.07306"
              ry="1.07433"
              transform="translate(-165.524 -93.9596)"
              fill="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="10s"
                begin="3"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </ellipse>
            <path
              d="M165.182 94.3159L139.429 120.1"
              transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="10s"
                begin="3"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </path>
            <ellipse
              cx="476.525"
              cy="363.313"
              rx="1.07433"
              ry="1.07306"
              transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
              fill="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="12s"
                begin="4"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </ellipse>
            <path
              d="M476.171 362.952L450.417 337.168"
              transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
              stroke="rgba(255,255,255, .5)"
            >
              <animateMotion
                dur="12s"
                begin="4"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath xlinkHref="#path_0" />
              </animateMotion>
            </path>
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(301 301) rotate(90) scale(300)"
              >
                <stop offset="0.333333" stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(301 301) rotate(90) scale(300)"
              >
                <stop offset="0.333333" stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(301 301) rotate(90) scale(300)"
              >
                <stop offset="0.333333" stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="paint3_linear"
                x1="295.043"
                y1="193.116"
                x2="269.975"
                y2="218.154"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="476.529"
                y1="363.31"
                x2="451.461"
                y2="338.272"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="382.168"
                y1="155.027"
                x2="357.1"
                y2="129.989"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear"
                x1="333.309"
                y1="382.693"
                x2="358.376"
                y2="357.655"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear"
                x1="165.54"
                y1="93.9578"
                x2="140.472"
                y2="118.996"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear"
                x1="414.367"
                y1="301.156"
                x2="439.435"
                y2="276.118"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear"
                x1="515.943"
                y1="288.238"
                x2="541.339"
                y2="291.454"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint10_linear"
                x1="117.001"
                y1="230.619"
                x2="117.36"
                y2="258.193"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint11_linear"
                x1="476.529"
                y1="363.31"
                x2="451.461"
                y2="338.272"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fefefe" />
                <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ) : (
        <div className="hero-image">
          <svg
        className="BgAnimation__svg"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.15">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739
             193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563
              429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 
              218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
            
            stroke="#17181F"
            strokeWidth="2"
            id="path_0"
          />
          <path
            d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
            stroke="#17181F"
            id="path_1"
          />
          <path
            d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
            stroke="#17181F"
            id="path_2"
          />
        </g>
        <ellipse
          cx="295.027"
          cy="193.118"
          transform="translate(-295.027 -193.118)"
          rx="1.07306"
          ry="1.07433"
          fill="#17181F"
        >
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </ellipse>
        <path
          d="M294.685 193.474L268.932 219.258"
          transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
          stroke="url(#paint3_linear)"
        >
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </path>
        <ellipse
          cx="295.027"
          cy="193.118"
          transform="translate(-295.027 -193.118)"
          rx="1.07306"
          ry="1.07433"
          fill="#46737"
        >
          <animateMotion
            dur="5s"
            begin="1"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </ellipse>
        <path
          d="M294.685 193.474L268.932 219.258"
          transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
          stroke="url(#paint7_linear)"
        >
          <animateMotion
            dur="5s"
            begin="1"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </path>
        <ellipse
          cx="476.525"
          cy="363.313"
          rx="1.07433"
          ry="1.07306"
          transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
          fill="#17181F"
        >
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>
        <path
          d="M476.171 362.952L450.417 337.168"
          transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
          stroke="url(#paint4_linear)"
        >
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
        <ellipse
          cx="382.164"
          cy="155.029"
          rx="1.07433"
          ry="1.07306"
          transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
          fill="#17181F"
        >
          <animateMotion
            dur="10s"
            begin="1"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>
        <path
          d="M381.81 154.669L356.057 128.885"
          transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
          stroke="url(#paint5_linear)"
        >
          <animateMotion
            dur="10s"
            begin="1"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
        <ellipse
          cx="333.324"
          cy="382.691"
          rx="1.07306"
          ry="1.07433"
          transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
          fill="#17181F"
        >
          <animateMotion
            dur="5s"
            begin="0"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_1" />
          </animateMotion>
        </ellipse>
        <path
          d="M333.667 382.335L359.42 356.551"
          transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
          stroke="url(#paint6_linear)"
        >
          <animateMotion
            dur="5s"
            begin="0"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_1" />
          </animateMotion>
        </path>
        <ellipse
          cx="165.524"
          cy="93.9596"
          rx="1.07306"
          ry="1.07433"
          transform="translate(-165.524 -93.9596)"
          fill="#17181F"
        >
          <animateMotion
            dur="10s"
            begin="3"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>
        <path
          d="M165.182 94.3159L139.429 120.1"
          transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
          stroke="url(#paint7_linear)"
        >
          <animateMotion
            dur="10s"
            begin="3"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
        <ellipse
          cx="476.525"
          cy="363.313"
          rx="1.07433"
          ry="1.07306"
          transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
          fill="#fefefe"
        >
          <animateMotion
            dur="12s"
            begin="4"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>
        <path
          d="M476.171 362.952L450.417 337.168"
          transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
          stroke="url(#paint11_linear)"
        >
          <animateMotion
            dur="12s"
            begin="4"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor="#FBFBFB" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor="#FBFBFB" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint2_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor="#FBFBFB" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint3_linear"
            x1="295.043"
            y1="193.116"
            x2="269.975"
            y2="218.154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17181F" />
            <stop offset="1" stopColor="#17181F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="476.529"
            y1="363.31"
            x2="451.461"
            y2="338.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17181F" />
            <stop offset="1" stopColor="#17181F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="382.168"
            y1="155.027"
            x2="357.1"
            y2="129.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17181F" />
            <stop offset="1" stopColor="#17181F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="333.309"
            y1="382.693"
            x2="358.376"
            y2="357.655"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17181F" />
            <stop offset="1" stopColor="#17181F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="165.54"
            y1="93.9578"
            x2="140.472"
            y2="118.996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17181F" />
            <stop offset="1" stopColor="#17181F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="414.367"
            y1="301.156"
            x2="439.435"
            y2="276.118"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fefefe" />
            <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="515.943"
            y1="288.238"
            x2="541.339"
            y2="291.454"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fefefe" />
            <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint10_linear"
            x1="117.001"
            y1="230.619"
            x2="117.36"
            y2="258.193"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#17181F" />
            <stop offset="1" stopColor="#17181F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint11_linear"
            x1="476.529"
            y1="363.31"
            x2="451.461"
            y2="338.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fefefe" />
            <stop offset="1" stopColor="#fefefe" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
          {/* <AnimatedSvgWrapper>
            <svg
              width="369"
              height="192"
              viewBox="0 0 369 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_2)">
              
                <path
                  d="M98 28L194.995 152.5H1.00516L98 28Z"
                  fill="#A33636"
                  className="animate-path"
                />
                <g filter="url(#filter0_f_3_2)">
                  <path
                    d="M273 28L369.995 152.5H176.005L273 28Z"
                    fill="#A33636"
                    className="animate-path"
                  />
                  <path
                    d="M177.029 152L273 28.8136L368.971 152H177.029Z"
                    stroke="black"
                    className="animate-path"
                  />
                </g>
              
                <g filter="url(#filter1_b_3_2)">
                  <path
                    d="M228.5 28L322.464 152.5H134.536L228.5 28Z"
                    fill="#A33636"
                    className="animate-path"
                  />
                  <path
                    d="M135.54 152L228.5 28.83L321.46 152H135.54Z"
                    stroke="black"
                    className="animate-path"
                  />
                </g>
                <g filter="url(#filter2_i_3_2)">
                  <path
                    d="M152 26L248.995 150.5H55.0052L152 26Z"
                    fill="#A33636"
                    className="animate-path"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_3_2"
                  x="172.005"
                  y="24"
                  width="201.99"
                  height="132.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_3_2"
                  />
                </filter>
                <filter
                  id="filter1_b_3_2"
                  x="130.536"
                  y="24"
                  width="195.927"
                  height="132.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_3_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_3_2"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_i_3_2"
                  x="55.0052"
                  y="26"
                  width="193.99"
                  height="128.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_3_2"
                  />
                </filter>
                <clipPath id="clip0_3_2">
                  <rect width="369" height="192" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </AnimatedSvgWrapper> */}
        </div>
      )}
    </>
  );
};

export default BackgroundAnimation;
