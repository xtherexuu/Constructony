import { useEffect, useState } from "react";
import { store } from "./store";

export const useTheme = () => {
  const [theme, setTheme] = useState(store.getState().theme);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setTheme(store.getState().theme);
    });
    return unsubscribe;
  }, []);
  return theme === "light"
    ? {
        colors: {
          mode: "light",
          bg: "#fcfcfc",
          color1: "#296dcc",
          color1light: "#3377d6",
          color2: "#225baa",
          gradientLight: "#33D4D6",
          gradientDark: "#3377D6",
          text1: "#000000",
          text2: "#242424",
          text3: "#333333",
        },
      }
    : {
        colors: {
          mode: "dark",
          bg: "#242424",
          color1: "#F4B106",
          color1light: "#fac338",
          color2: "#855f00",
          gradientLight: "#f8a718",
          gradientDark: "#fa5f3c",
          text1: "#ffffff",
          text2: "#ededed",
          text3: "#d9d9d9",
        },
      };
};
