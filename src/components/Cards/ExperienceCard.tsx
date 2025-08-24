import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Clip } from "@/components/common";
import { mono } from "@/app/fonts";
import { FaBriefcase } from "react-icons/fa6";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

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
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex items-start space-x-8"
    >
      {/* Content */}
      <motion.div
        className="flex-1"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="glass-card p-6 border-glass-border hover:border-glass-border/60 bg-primary-foreground/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{role}</h3>
              <p className="text-purple-400 font-medium">{company}</p>
            </div>
            <span className="text-sm text-gray-400 mt-2 sm:mt-0">{year}</span>
          </div>
          <ul className="space-y-2">
            {description.map((point, pointIndex) => (
              <li
                key={pointIndex}
                className="text-gray-300 text-xs flex items-start"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-white/20 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
