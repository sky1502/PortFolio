"use client";

import { motion } from "motion/react";

import { nasalization } from "@/app/fonts";
import { ExperienceCard } from "@/components/Cards";
import { experienceData } from "@/constant";

export const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            className={`${nasalization.className} text-4xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp, i) => (
            <ExperienceCard
              key={i}
              role={exp.role}
              year={exp.year}
              description={exp.description}
              company={exp.company}
              technologies={exp.technologies}
              url={exp.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
