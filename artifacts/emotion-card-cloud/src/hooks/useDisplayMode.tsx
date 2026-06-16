import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { DisplayMode } from "../data/emotions";

const STORAGE_KEY = "emotion-card-display-mode";

interface DisplayModeContextValue {
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
}

const DisplayModeContext = createContext<DisplayModeContextValue | null>(null);

function readStoredMode(): DisplayMode {
  if (typeof window === "undefined") return "child";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  // 기본값은 어린이 사용을 고려하여 "child"
  return saved === "adult" || saved === "child" ? saved : "child";
}

export function DisplayModeProvider({ children }: { children: ReactNode }) {
  const [displayMode, setDisplayModeState] = useState<DisplayMode>(readStoredMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, displayMode);
    } catch {
      // localStorage 사용 불가 환경(시크릿 모드 등)에서는 무시한다.
    }
  }, [displayMode]);

  const setDisplayMode = (mode: DisplayMode) => setDisplayModeState(mode);

  return (
    <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
}

export function useDisplayMode(): DisplayModeContextValue {
  const ctx = useContext(DisplayModeContext);
  if (!ctx) {
    throw new Error("useDisplayMode must be used within a DisplayModeProvider");
  }
  return ctx;
}
