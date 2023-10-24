"use client";
import Card from "@/components/card";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const data: any[] = [
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.",
      src: "https://loremflickr.com/640/360",
    },

    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.",
      src: "https://loremflickr.com/640/360",
    },
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.",
      src: "https://loremflickr.com/640/360",
    },
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.",
      src: "https://loremflickr.com/640/360",
    },
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.",
      src: "https://loremflickr.com/640/360",
    },
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.",
      src: "https://loremflickr.com/640/360",
    },
  ];

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const card = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="pt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16"
    >
      {data.map((p, i) => (
        <motion.div variants={card} key={i}>
          <Card data={data[i]}></Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
