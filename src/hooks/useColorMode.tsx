import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light")

  useEffect(() => {
    const className = "dark"
    const bodyClasses = document.body.classList

    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }, [colorMode])

  return [colorMode, setColorMode]
}
