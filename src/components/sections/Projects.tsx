"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { nasalization } from "@/app/fonts";

import { ProjectCard } from "../Cards";
import { projectsData } from "@/constant/";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    amount: 0.1,
  });

  return (
    <section ref={ref} id="project" className="py-12 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/8 to-cyan-500/8 rounded-full blur-3xl"
        animate={
          isInView
            ? {
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }
            : {
                scale: 1.2,
                rotate: 360,
              }
        }
        transition={{
          duration: 25,
          repeat: isInView ? Infinity : 0,
          ease: "linear",
        }}
      />

      <div className="mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={`${nasalization.className} text-4xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My Projects
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projectsData.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <ProjectCard
                title={proj.name}
                desc={proj.description}
                git={proj.github_link}
                hostedAt={proj.demo}
                tech={proj.tech}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
