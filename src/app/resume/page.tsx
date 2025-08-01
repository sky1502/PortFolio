"use client";

import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/common";
import { nasalization } from "@/app/fonts";
import {
  HiDownload,
  HiZoomIn,
  HiZoomOut,
  HiOutlineArrowsExpand,
} from "react-icons/hi";

interface HTMLIFrameElementWithFullscreen extends HTMLIFrameElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface DocumentWithFullscreen extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

export default function Resume() {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50));
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const iframe = document.querySelector(
        "iframe"
      ) as HTMLIFrameElementWithFullscreen;
      if (iframe?.requestFullscreen) {
        iframe.requestFullscreen();
        setIsFullscreen(true);
      } else if (iframe?.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
        setIsFullscreen(true);
      } else if (iframe?.msRequestFullscreen) {
        iframe.msRequestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      const doc = document as DocumentWithFullscreen;
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
        setIsFullscreen(false);
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
        setIsFullscreen(false);
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="top-0 fixed -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <Fragment>
        <Navbar />

        <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`${nasalization.className} text-4xl font-bold text-primary mb-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Resume
            </motion.h1>
            <motion.p
              className="text-primary-foreground/70 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              View and download my latest resume
            </motion.p>
          </motion.div>

          {/* PDF Controls */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-6 p-4 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={handleZoomOut}
              className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-lg transition-all duration-300 border border-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiZoomOut className="w-4 h-4" />
              Zoom Out
            </motion.button>

            <motion.div className="flex items-center px-4 py-2 bg-card/50 rounded-lg border border-primary/20">
              <span className="text-primary-foreground text-sm">{zoom}%</span>
            </motion.div>

            <motion.button
              onClick={handleZoomIn}
              className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-lg transition-all duration-300 border border-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiZoomIn className="w-4 h-4" />
              Zoom In
            </motion.button>

            <motion.button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-lg transition-all duration-300 border border-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlineArrowsExpand className="w-4 h-4" />
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </motion.button>

            <motion.a
              href="/docs/MyResume.pdf"
              download="Aarab-nishchal-resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="w-4 h-4" />
              Download PDF
            </motion.a>
          </motion.div>

          {/* Resume Container */}
          <motion.div
            className="relative overflow-hidden bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* PDF Iframe with custom styling */}
            <motion.div
              className="w-full overflow-auto bg-white rounded-2xl"
              style={{ height: "800px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div
                className="flex justify-center items-start min-h-full p-4"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "top center",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <iframe
                  src="/docs/MyResume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  width="100%"
                  height="780px"
                  className="border-0 shadow-lg"
                  title="Resume PDF"
                  style={{
                    maxWidth: "210mm", // A4 width
                    minHeight: "297mm", // A4 height
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.p
              className="text-primary-foreground/60 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              💡 Use the controls above to zoom, view fullscreen, or download
              the PDF
            </motion.p>
          </motion.div>
        </div>

        <Footer />
      </Fragment>
    </div>
  );
}
