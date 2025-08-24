import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  index: number;
  title: string;
  desc: string;
  github: string;
  demo?: string;
  tech: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  desc,
  github,
  demo,
  tech,
}) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Card className="overflow-hidden bg-glass-bg border-glass-border transition-all duration-300 h-full flex flex-col">
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{desc}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-white/20 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex space-x-3 mt-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            {demo && (
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                asChild
              >
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
