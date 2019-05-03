import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import australiaSky from "./assets/australia-sky.jpg";
import blackWhiteMcr from "./assets/black-white-mcr.jpg";
import rinjani from "./assets/rinjani.jpg";

const items = [
  {
    src: australiaSky,
    altText: "Slide 1",
    caption: "Sky",
    header: "Australia"
  },
  {
    src: blackWhiteMcr,
    altText: "Slide 2",
    caption: "Fog",
    header: "Manchester"
  },
  {
    src: rinjani,
    altText: "Slide 3",
    caption: "Sunset",
    header: "Rinjani"
  }
];

export const Carousel = () => <UncontrolledCarousel items={items} />;
