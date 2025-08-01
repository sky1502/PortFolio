import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Clip } from "@/components/common";
import { mono } from "@/app/fonts";

interface ExperienceCardProps {
  role: string;
  year: string;
  description: Array<string>;
  company: string;
  technologies: Array<string>;
  url?: string;
  index?: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  year,
  description,
  company,
  technologies,
  url,
  index = 0,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "0px 100px -10px 0px",
    amount: 0.3,
  });

  return (
    <div ref={ref} className="mb-12 flex flex-wrap lg:justify-center group">
      {/* Year Section */}
      <motion.div
        className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:text-right lg:pr-8"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut",
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <span
            className={`${mono.className} inline-block text-lg font-bold tracking-wider text-primary pt-4`}
          >
            {year}
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="w-full max-w-xl lg:w-3/4"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{
          duration: 0.8,
          delay: 0.2 + index * 0.2,
          ease: "easeOut",
        }}
      >
        <div className="bg-gradient-to-br from-slate-900/20 to-slate-800/10 backdrop-blur-md border border-primary/30 rounded-xl p-6 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group-hover:transform group-hover:scale-[1.01] hover:bg-gradient-to-br hover:from-slate-900/30 hover:to-slate-800/20">
          {/* Role and Company */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ y: -2 }}
          >
            <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
              <span className="font-bold text-primary-foreground/90">
                {role}
              </span>
              {url ? (
                <Link href={url} className="text-secondry font-normal">
                  <small> - {company}</small>
                </Link>
              ) : (
                <small className="text-secondry font-normal">
                  {" "}
                  - {company}
                </small>
              )}
            </h3>
          </motion.div>

          {/* Description List */}
          <div className="mb-6">
            <ul className="space-y-3">
              {description.map((desc, descIndex) => (
                <motion.li
                  key={descIndex}
                  className="flex items-start gap-3 text-slate-400 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.2 + descIndex * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary to-purple-400 rounded-full mt-2 shadow-sm shadow-primary/50"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.2 + descIndex * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{ scale: 1.3, rotate: 180 }}
                  />
                  <span className="text-xs hover:text-slate-300 transition-colors duration-300">
                    {desc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.2,
              ease: "easeOut",
            }}
          >
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                      }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.9 + index * 0.2 + techIndex * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Clip name={tech} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
