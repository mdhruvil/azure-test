"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Emotion ",
  },
  {
    text: "Place to make dream reality ",
  },
  {
    text: "Hub for Events and Activities",
  },
  {
    text: "Innovation Hub",
  },
  {
    text: "Smart Campus",
  },
  {
    text: "Startup Hub",
  },
  {
    text: "Vibrant Campus",
  },
  {
    text: "Home",
  },
];


export default function AuroraBackgroundDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          LDCE is not just a college.
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          it's an
        </div>
        <div className="w-full h-[60vh] flex items-center justify-center">
          {/* Core Loader Modal */}
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />

          {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
          <button
            onClick={() => setLoading(true)}
            className="bg-[#c3ecfa] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
            style={{
              boxShadow:
                "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
            }}
          >
            click to know
          </button>

          {loading && (
            <button
              className="fixed top-4 right-4 text-black dark:text-white z-[120]"
              onClick={() => setLoading(false)}
            >
              <IconSquareRoundedX className="h-10 w-10" />
            </button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
