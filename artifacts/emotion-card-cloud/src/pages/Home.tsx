import { useState } from "react";
import { Mode } from "../components/ModeToggle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NormalMode } from "../components/NormalMode";
import { RandomMode } from "../components/RandomMode";
import { basicEmotions, allEmotions } from "../data/emotions";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [mode, setMode] = useState<Mode>("normal");

  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-white rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl" />
      </div>

      <Header mode={mode} onModeChange={setMode} />

      <main className="flex-1 flex flex-col w-full relative z-0">
        <AnimatePresence mode="wait">
          {mode === "normal" ? (
            <motion.div
              key="normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex-1 flex flex-col"
            >
              <NormalMode emotions={allEmotions} />
            </motion.div>
          ) : (
            <motion.div
              key="random"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex-1 flex flex-col"
            >
              <RandomMode basicEmotions={basicEmotions} allEmotions={allEmotions} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}