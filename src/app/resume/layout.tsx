import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Gagan Singhal",
  description:
    "View and download Gagan Singhal's professional resume. AI Engineer and Researcher specializing in generative models, agentic systems, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Gagan Singhal",
    description:
      "View and download Gagan Singhal's professional resume featuring his experience and skills as a student developer.",
    url: "https://aarab.vercel.app/resume",
    siteName: "Gagan Singhal",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Gagan Singhal Resume",
      },
    ],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      {/* Preload the PDF for better performance */}
      <link
        rel="preload"
        href="/docs/Gagan_Singhal_Resume.pdf"
        as="document"
        type="application/pdf"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
