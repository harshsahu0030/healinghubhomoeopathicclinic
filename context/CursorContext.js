"use client";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext(null);

const defaultCursor = {
  cursorClass: "h-6 w-6 bg-(--bg-mint) rounded-full",
  text: "",
  textClass: "text-(--textdark)",
  image: "",
};

export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState(defaultCursor);

  const updateCursor = (value) => {
    setCursor((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const resetCursor = () => {
    setCursor(defaultCursor);
  };

  return (
    <CursorContext.Provider value={{ cursor, updateCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("useCursor must be used inside CursorProvider");
  }

  return context;
}
