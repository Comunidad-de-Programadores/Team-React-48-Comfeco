import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Button from "../landing/ButtonAction";
import Input from "../share/Input";

interface Props {}

export default function Sponsors({}: Props): ReactElement {
  const ImageSrc = (p: { img: string }) => (
    <Image borderRadius="1em" mt="0.5rem" src={p.img} h="170px" w="auto" />
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    autoplay: true,
  };
  const settings2 = {
    ...settings,
    rtl: true,
  };

  return (
    <Flex
      display={{
        sm: "block",
        md: "flex",
      }}
      color="#fff"
      justifyContent="space-around"
      alignItems="center"
      position={{ sm: "relative", lg: "initial" }}
      width={{ xxl: "60%" }}
      margin={{ xxl: "0 auto" }}
    >
      <Box
        padding={{
          sm: "3rem 1rem",
          md: "2rem",
        }}
        position={{ sm: "relative", lg: "initial" }}
        zIndex="2"
        backgroundColor={{ sm: "rgba(0,0,0,.7)", md: "initial" }}
      >
        <Heading textAlign={{ sm: "center", md: "initial" }} as="h2">
          Sponsors
        </Heading>
        <Text>
          Estas grandes compañias y personas nos apoyan. &nbsp;
          {/* </Text>
        <Text> */}
          ¿Te gustaria apoyarnos?
        </Text>
        <Text mt="2em">
          Solo dejanos tu correo electronico y nos pondremos en contacto cotigo
        </Text>
        <HStack
          spacing={{
            lg: "30px",
          }}
          mt="1em"
          display={{ sm: "block", lg: "flex" }}
        >
          <Box
            margin={{ sm: "0 auto 1rem", lg: "initial" }}
            maxWidth={{ sm: "30rem", lg: "initial" }}
          >
            <Input placeholder="Correo Electronico" />
          </Box>
          <Box
            width={{
              sm: "15rem",
            }}
            margin={{ sm: "0 auto", lg: "initial" }}
          >
            <Button textButton="Enviar" />
          </Box>
        </HStack>
      </Box>
      <HStack
        p="2em"
        spacing="30px"
        justifyContent="space-around"
        h={{ md: "380px" }}
        w={{ md: "50%" }}
        overflow="hidden"
        position={{ sm: "absolute", md: "initial" }}
        top="0"
        bottom="0"
        left="0"
        right="0"
      >
        <Box w="50%" justifyContent="center">
          <Slider {...settings}>
            <ImageSrc img="/sponsors/codelytv.webp" />
            <ImageSrc img="/sponsors/huawei.webp" />
            <ImageSrc img="/sponsors/leonidas_esteban.webp" />
            <ImageSrc img="/sponsors/jose_dimas_lujan.webp" />
          </Slider>
        </Box>
        <Box w="50%">
          <Slider {...settings2}>
            <ImageSrc img="/sponsors/codelytv.webp" />
            <ImageSrc img="/sponsors/huawei.webp" />
            <ImageSrc img="/sponsors/leonidas_esteban.webp" />
            <ImageSrc img="/sponsors/jose_dimas_lujan.webp" />
          </Slider>
        </Box>
      </HStack>
    </Flex>
  );
}
