import { Inter, Cutive } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const mono = Cutive({
  weight: "400",
  variable: "--font-mono",
  subsets: ["latin"],
});

export const nasalization = localFont({
  src: [
    {
      path: "../assets/fonts/nasalization.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nasa",
});

export const quentin = localFont({
  src: [
    {
      path: "../assets/fonts/quentin.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-quentin",
});
