import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Elements/button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { HeadersH1, HeadersH2, Paragraphs } from "../Elements/typography";

const CarouselContainer = styled.section`
  height: 70vh;
  width: 100%;
  background: url(${(props) => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 1.5s ease-in-out;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.textDark};
    opacity: 0.5;
    z-index: 1;
  }
`;
const CarouselContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CarouselTypgraphy = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 70%;
    padding: 0.5rem;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

export default function Carousel() {
  const [featuredImages, setFeaturedImages] = useState([
    "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ]);
  let [indexOfImage, setIndexOfImage] = useState(0);
  const [activeImage, setActiveImage] = useState(featuredImages[indexOfImage]);

  useEffect(() => {
    setInterval(() => {
      if (indexOfImage < featuredImages.length - 1) {
        setIndexOfImage((indexOfImage += 1));
        setActiveImage(featuredImages[indexOfImage]);
      }
    }, 10000);
  }, []);

  //Goes to the next image on click
  const nextFeaturedImage = () => {
    setIndexOfImage((indexOfImage += 1));
    setActiveImage(featuredImages[indexOfImage]);
  };
  //Goes to the next previous on click
  const previousFeaturedImage = () => {
    setIndexOfImage((indexOfImage -= 1));
    setActiveImage(featuredImages[indexOfImage]);
  };
  return (
    <CarouselContainer featuredImage={activeImage}>
      <CarouselContent>
        <CarouselTypgraphy>
          <HeadersH1 color='light'>DISCOVER FASHION TRENDS</HeadersH1>
          <Paragraphs color='light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            delectus.
          </Paragraphs>
          <Button color='white'>
            <HeadersH2 color='light'>TRENDING</HeadersH2>
          </Button>
        </CarouselTypgraphy>

        <ButtonsContainer>
          <Button
            color='white'
            disabled={indexOfImage === 0}
            onClick={previousFeaturedImage}
            style={{ color: "white" }}>
            <ArrowBackIosIcon style={{ fontSize: "3rem" }} />
          </Button>
          <Button
            color='white'
            disabled={indexOfImage === featuredImages.length - 1}
            onClick={() => nextFeaturedImage()}
            style={{ color: "white" }}>
            <ArrowForwardIosIcon style={{ fontSize: "3rem" }} />
          </Button>
        </ButtonsContainer>
      </CarouselContent>
    </CarouselContainer>
  );
}
