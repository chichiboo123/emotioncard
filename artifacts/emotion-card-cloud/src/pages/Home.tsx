import { useState } from "react";
import { Mode } from "../components/ModeToggle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NormalMode } from "../components/NormalMode";
import { RandomMode } from "../components/RandomMode";
import { motion, AnimatePresence } from "framer-motion";
import { StarryBackground } from "../components/StarryBackground";

export default function Home() {
  const [mode, setMode] = useState<Mode>("normal");

  return (
    <div className="h-[100dvh] flex flex-col relative overflow-hidden">
      <StarryBackground />

      <Header mode={mode} onModeChange={setMode} />

      <main className="flex-1 min-h-0 flex flex-col w-full relative z-10 overflow-y-auto">
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
              <NormalMode />
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
              <RandomMode />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}