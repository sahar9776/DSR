import driftIcon from "../icons/drift.png";
import tiresIcon from "../icons/tires.png";
import partsIcon from "../icons/parts.png";
import logo from "../icons/logo.png";

import type { Item } from "../dataType/types";
import type { Variants } from "framer-motion";

export const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.8,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const list: Item[] = [
  {
    id: 1,
    question:
      "Haven't prepared your car for drifting yet? Don't you want to participate in the exciting DSR competitions? You can test yourself in these competitions.",
    src: driftIcon,
    alt: "drift Icon",
    imageClass: "w-3/4 h-auto",
    divClass:
      "w-96 h-96 bg-[#d62828]/75 shadow-sm shadow-white/35 rounded-lg absolute top-10 right-44 z-20 flex flex-col items-center p-5",
  },
  {
    id: 3,
    question: "Are your tires burning out quickly?",
    src: tiresIcon,
    alt: "tires Icon",
    imageClass: "w-1/2 h-auto",
    divClass:
      "w-80 h-80 bg-[#0d0d0d]/75 shadow-sm shadow-white/35 rounded-lg  absolute top-40 -right-24 flex flex-col items-center p-5",
  },
  {
    id: 2,
    question: "2000+ satisfied customers chose us because we are part of you.",
    src: logo,
    alt: "logo Icon",
    imageClass: "w-40 h-40",
    divClass:
      "w-80 h-80 bg-[#0d0d0d]/75 shadow-sm shadow-white/35 rounded-lg  absolute top-0 left-40 flex flex-col items-center p-5",
  },
  {
    id: 4,
    question: "Are the parts you need becoming more expensive?",
    src: partsIcon,
    alt: "parts Icon",
    imageClass: "w-1/2 h-auto",
    divClass:
      "w-68 h-68 bg-[#d62828]/75 shadow-sm shadow-white/35 rounded-lg  absolute top-68 -right-80 flex flex-col items-center p-5",
  },
];
