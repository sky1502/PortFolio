"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconType } from "react-icons";

import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

import { selfData } from "@/constant";
import { nasalization } from "@/app/fonts";
import { ContactFormCard, ContactSocials } from "@/components/Cards";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="mb-8">
        <div className="max-w-6xl mx-auto backdrop:blur-xl rounded-lg">
          <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${nasalization.className} text-4xl font-bold text-primary`}
              >
                Contact Me
              </motion.h2>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-slate-300 mt-3"
              >
                Open to any adventure that involves learning and making cool
                stuff!
              </motion.p>

              <ul className="mt-12 space-y-8">
                <ContactList
                  Icon={IoMailOutline}
                  link={`mailto:${selfData.email}`}
                  text={selfData.email}
                  initial={-25}
                />

                <ContactList
                  Icon={FaInstagram}
                  link={`https://instagram.com/${selfData.socials_username.instagram}`}
                  text={`@${selfData.socials_username.instagram}`}
                  initial={25}
                />

                <ContactList
                  Icon={IoLocationOutline}
                  link={`https://www.google.com/maps/place/${selfData.current_location.city}+${selfData.current_location.state}+${selfData.current_location.country}`}
                  text={`${selfData.current_location.city}, ${selfData.current_location.state}, ${selfData.current_location.country}`}
                  initial={-25}
                />
              </ul>

              <ContactSocials />
            </div>

            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactList = ({
  Icon,
  link,
  text,
  initial,
}: {
  Icon: IconType;
  link: string;
  text: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="text-slate-300 w-6 h-6" />
        <span className="text-slate-300 font-medium text-md ml-3">{text}</span>
      </Link>
    </motion.li>
  );
};
