"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After realizing my love for <span className="font-medium">tech</span>, 
      I pursued my passion for IT infrastructure and support.
       I honed my skills to become a <span className="font-medium">versatile computer technician</span>.
       <span className="italic">my favorite aspect of the job</span> is the constant evolution of technology 
       and the challenges it presents. 
       i <span className="underline">thrive</span> on solving complex technical issues and optimizing systems.
        my core competencies include <span className="font-medium">Windows and macOS, advanced networking, 
          system administration, and cybersecurity</span>. i'm also proficient in virtualization, cloud platforms,
           and database management. i'm always eager to expand my knowledge in emerging technologies.
           i'm open for opportunities where i can leverage my diverse skill set to drive IT excellence and innovation.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy playing
        video games, watching movies, and hanging out with my friend. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
    </motion.section>
  );
}
