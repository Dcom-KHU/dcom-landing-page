import React from "react"
import styled from "@emotion/styled"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderWrapper = styled.div`
  display: inline;
  margin: 30px auto;
  height: 500px;
  width: 500px;
  @media (max-width: 768px) {
    height: 100px;
    width: 300px;
  }
`

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <StaticImage
          src="../../images/ex1.jpg"
          alt="A dinosaur"
          layout="fixed"
          width={500}
          height={300}
        />

        <StaticImage
          src="../../images/ex2.jpg"
          alt="A dinosaur"
          layout="fixed"
          width={500}
          height={300}
        />

        <StaticImage
          src="../../images/ex3.jpg"
          alt="A dinosaur"
          layout="fixed"
          width={500}
          height={300}
        />
      </Slider>
    </SliderWrapper>
  )
}

export default ImageSlider
