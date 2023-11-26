import React, { useEffect, useRef, useState } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      console.log(carouselRef.current);
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Section id="about">
        {/* <SectionDivider divider />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Olá, sou um desenvolvedor Full Stack apaixonado por tecnologia, com
          mais de 8 anos de experiência em programação.Durante minha carreira,
          tive a oportunidade de trabalhar em uma variedade de projetos
          desafiadores e inovadores, que vão desde aplicações web até soluções
          de software complexas.
        </SectionText>
        <SectionText>
          Tive a oportunidade de liderar projetos do início ao fim e conhecer a
          fundo todas as etapas do ciclo de vida do desenvolvimento de software.
          Estou confortável trabalhando tanto no front-end quanto no back-end,
          sendo capaz de criar interfaces de usuário intuitivas e responsivas,
          bem como arquitetar e implementar soluções de back-end robustas. Minha
          experiência abrange várias tecnologias, incluindo [JavaScript, React,
          Node.js, Python, Django, entre outras.]
        </SectionText>
        <SectionText>
          Estou sempre procurando expandir minhas habilidades e enfrentar novos
          desafios. Portanto, estou atualmente em busca de novas oportunidades
          onde possa aplicar minhas habilidades existentes e continuar crescendo
          como profissional na área de TI. Se sua equipe precisa de um
          desenvolvedor Full Stack experiente, dedicado e apaixonado por
          resolver problemas e criar soluções eficientes, adoraria ter a
          oportunidade de discutir como posso contribuir para seus projetos.
          Estou ansioso para trazer minha experiência, compromisso e paixão para
          sua empresa.
        </SectionText> */}

        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {TimeLineData.map((item, index) => (
              <CarouselMobileScrollNode
                key={index}
                final={index === TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <CarouselItemTitle>
                    {`${item.year}`}
                    <CarouselItemImg
                      width="208"
                      height="6"
                      viewBox="0 0 208 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                        fillOpacity="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-4.30412e-10"
                          y1="0.5"
                          x2="208"
                          y2="0.500295"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop
                            offset="0.79478"
                            stopColor="#fff"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </CarouselItemImg>
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData.map((item, index) => {
            return (
              <CarouselButton
                key={index}
                index={index}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
                type="button"
                name={`slide-${index}`}
                aria-label={`slide ${index} was selected`}
              >
                <CarouselButtonDot active={activeItem} />
              </CarouselButton>
            );
          })}
        </CarouselButtons>
      </Section>
    </div>
  );
};

export default Timeline;
