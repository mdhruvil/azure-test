import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";

export default function HeroParallaxDemo() {
  return (
    <>
      <a href="https://ldce.ac.in/">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          L.D.College Of Engineering  
        </Button>
      </a>
      <HeroParallax products={products} />
    </>
  );
}
const products = [
  {
    title: "LDCE",
    link: "/getstarted",
    thumbnail: "/get (1).jpeg",
  },
  {
    title: "LDCE",
    link: "/getstarted",
    thumbnail: "/get (2).jpeg",
  },
  {
    title: "LDCE",
    link: "/getstarted",
    thumbnail: "/get (3).jpeg",
  },

  {
    title: "LDCE",
    link: "/getstarted",
    thumbnail: "/get (4).jpeg",
  },
  {
    title: "LDCE",
    link: "/getstarted",
    thumbnail: "/get (5).png",
  },
  {
    title: "ldce",
    link: "/getstarted",
    thumbnail: "/get.jpeg",
  },
  {
    title: "campus",
    link: "/getstarted",
    thumbnail: "/get.jpeg",
  },
  {
    title: "",
    link: "/getstarted ",
    thumbnail: "/get (3).jpeg",
  },
  {
    title: "",
    link: "/getstarted",
    thumbnail: "/get (2).jpeg",
  },

  {
    title: "Campus",
    link: "/getstarted",
    thumbnail: "/get (2).jpeg",
  },

  {
    title: "Blog",
    link: "/getstarted",
    thumbnail: "/get.jpeg",
  },
];
