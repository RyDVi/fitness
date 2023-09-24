import { useContext } from "react";
import { ThemeControlContext } from "./ThemeControlContext";

export function useThemeControl() {
    const themeControlContext = useContext(ThemeControlContext);
    if (!themeControlContext) {
      throw new Error("ThemeControlContext is not available");
    }
    return themeControlContext;
  }
  