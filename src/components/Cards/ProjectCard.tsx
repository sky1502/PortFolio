import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Clip } from "../common";

interface ProjectCardProps {
  title: string;
  desc: string;
  git: string;
  hostedAt?: string;
  tech: string[];
  index?: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  desc,
  git,
  hostedAt,
  tech,
  index = 0,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "0px 100px -50px 0px",
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="h-full flex flex-col bg-gradient-to-br from-secondary/10 to-accent/5 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 50,
              scale: 0.9,
            }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div className="p-6 pb-2">
        <motion.h3
          className="text-xl font-semibold text-primary mb-3 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.2,
            ease: "easeOut",
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-xs text-secondary-foreground/80 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.5,
            delay: 0.4 + index * 0.2,
            ease: "easeOut",
          }}
        >
          {desc}
        </motion.p>
      </div>

      {/* Tech Stack */}
      <div className="px-6 pb-2 flex-grow flex flex-col justify-start">
        <motion.div
          className="flex gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.2,
          }}
        >
          {tech.map((t, chipIndex) => (
            <motion.div
              key={chipIndex}
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      rotate: -10,
                    }
              }
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.2 + chipIndex * 0.1,
                ease: "backOut",
                scale: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Clip name={t} px="3" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer Links */}
      <motion.div
        className="py-4 mx-6 mt-2 border-t border-primary/70"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: 0.8 + index * 0.2,
          ease: "easeOut",
        }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{
              duration: 0.4,
              delay: 0.9 + index * 0.2,
            }}
            whileHover={{
              x: 4,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
          >
            <Link
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary/90 hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
              View Code
            </Link>
          </motion.div>

          {hostedAt && (
            <>
              <motion.div
                className="w-px h-4 bg-primary/80"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scaleY: 1, opacity: 1 }
                    : { scaleY: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.3,
                  delay: 1.0 + index * 0.2,
                }}
              />
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{
                  duration: 0.4,
                  delay: 1.1 + index * 0.2,
                }}
                whileHover={{
                  x: 4,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
              >
                <Link
                  href={hostedAt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary/90 hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  Live Demo
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
