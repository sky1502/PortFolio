"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    amount: 0.2,
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isInView
            ? {
                scale: [0.8, 1.2, 1],
                opacity: [0, 0.3, 0.1, 0.3],
                x: [0, 50, -30, 0],
                y: [0, -20, 40, 0],
              }
            : {
                scale: 0.8,
                opacity: 0,
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Background Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-violet/10 rounded-full blur-3xl"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={
          isInView
            ? {
                scale: [0.6, 1, 0.8, 1],
                opacity: [0, 0.2, 0.4, 0.2],
                x: [0, -30, 20, 0],
                y: [0, 30, -20, 0],
              }
            : {
                scale: 0.6,
                opacity: 0,
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -80 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -80,
                  }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="relative group"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {/* Image Container */}
              <div className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl relative">
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet/20 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-20"
                  initial={{ x: "-100%" }}
                  animate={isInView ? { x: "200%" } : { x: "-100%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
                />

                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 1.1, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={"/images/me.png"}
                    alt="Profile Picture"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
                animate={
                  isInView
                    ? {
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }
                    : {
                        y: 0,
                        opacity: 0,
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-violet/40 rounded-full blur-sm"
                animate={
                  isInView
                    ? {
                        y: [0, 8, 0],
                        x: [0, 4, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }
                    : {
                        y: 0,
                        x: 0,
                        opacity: 0,
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <h2
                className={`${nasalization.className} text-4xl font-bold text-primary relative`}
              >
                About Me
                {/* Underline Animation */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-violet rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                />
              </h2>
            </motion.div>

            {/* Paragraphs */}
            <motion.div
              className="space-y-6 text-primary-foreground/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {selfData.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                    color: "hsl(var(--primary-foreground))",
                    transition: { duration: 0.2 },
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-4 text-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              transition={{
                duration: 0.6,
                delay: 1.0,
                ease: "easeOut",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`https://www.google.com/maps/place/${selfData.current_location.city}+${selfData.current_location.state}+${selfData.current_location.country}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border hover:border-primary/30 hover:bg-card/70 transition-all duration-300 group"
                >
                  <motion.div
                    animate={
                      isInView
                        ? {
                            rotate: [0, -10, 10, 0],
                          }
                        : {
                            rotate: 0,
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <LuMapPinned className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                  </motion.div>
                  <span className="group-hover:text-primary-foreground transition-colors">
                    {selfData.current_location.city},{" "}
                    {selfData.current_location.state}
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
