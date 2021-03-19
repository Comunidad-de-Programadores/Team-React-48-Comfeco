import { Box, Heading, Image } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
interface Props {}
type CardImageType = {
  src: string;
  descrip: string;
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  // beforeChange: () => {
  //   const imagen = document.querySelector(".slick-slide");
  //   console.log(imagen);
  // },
};
export default function Personas({}: Props): ReactElement {
  const CardImage = (p: CardImageType) => (
    <Box d="flex" justifyContent="center">
      <Image
        src={p.src}
        w="200px"
        borderRadius="1em"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      />
    </Box>
  );

  return (
    <Box maxWidth="100vw" width="100%" bg="#fafafa" p="3rem 0">
      <Box
        overflow="hidden"
        maxWidth="95vw"
        d="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h2" textAlign="center" mb="1em">
          Ellos ya creen en nuestra iniciativa:
        </Heading>
        <Box maxWidth="100vw" width={{ xxl: "60%" }}>
          <Slider {...settings}>
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
            <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
          </Slider>
        </Box>
        {/* <HStack spacing="10px" justifyContent="center">
          <IoEllipse color="#c4c4c4" />
          <IoEllipse color="#000" />
          <IoEllipse color="#c4c4c4" />
        </HStack> */}
      </Box>
    </Box>
  );
}
