"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconType } from "react-icons";
import { useRef } from "react";

import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

import { selfData } from "@/constant";
import { nasalization } from "@/app/fonts";
import { ContactSocials } from "@/components/Cards";

export const Contact = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 relative ${nasalization.className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ color: "hsl(var(--primary))" }}
          >
            Let&apos;s Connect
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          <motion.p
            className="text-base md:text-lg text-muted-foreground leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Prefer a direct reach-out? Drop me a line or connect on the platforms
            below—no forms, just a quick hello.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h3
              className="text-xl md:text-2xl font-semibold mb-6 font-mono text-center md:text-left"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Get In Touch
            </h3>
            <ContactList />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="text-xl md:text-2xl font-semibold mb-6 font-mono text-center md:text-left"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Socials
            </h3>
            <ContactSocials />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  href,
}) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card p-4 rounded-xl transition-all duration-300 hover:glass-intense group cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="p-3 rounded-lg"
          style={{ backgroundColor: "hsl(var(--primary) / 0.2)" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <Icon className="w-6 h-6" style={{ color: "hsl(var(--primary))" }} />
        </motion.div>
        <div className="flex-1">
          <p className="text-sm text-muted/80 mb-1">{label}</p>
          <p className="font-medium group-hover:text-primary transition-colors duration-300">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className="block"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return content;
};

const ContactList = () => {
  return (
    <div className="space-y-4">
      <ContactItem
        icon={IoMailOutline}
        label="Email"
        value={selfData.email}
        href={`mailto:${selfData.email}`}
      />
      <ContactItem
        icon={IoLocationOutline}
        label="Location"
        value={`${selfData.current_location.city}, ${selfData.current_location.state}, ${selfData.current_location.country}`}
        href="https://www.google.com/maps/place/Boston+University+Center+for+Computing+and+Data+Sciences+(CDS)/@42.3498971,-71.105805,17z/data=!3m1!4b1!4m6!3m5!1s0x89e379d2933baeed:0x60e64b526f2cebed!8m2!3d42.3498971!4d-71.1032301!16s%2Fg%2F11twkq1k9x?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
      />
    </div>
  );
};
