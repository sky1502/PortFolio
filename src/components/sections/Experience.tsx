"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { FaBriefcase } from "react-icons/fa6";
import { experienceData } from "@/constant";
import { ExperienceCard } from "../Cards";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="space-y-12 px-4">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                year={exp.year}
                description={exp.description}
                company={exp.company}
                technologies={exp.technologies}
                url={exp.url}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
