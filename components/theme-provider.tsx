"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>("light")

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    const theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : getSystemTheme()

    setResolvedTheme(theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  function setTheme(theme: Theme) {
    setResolvedTheme(theme)
    window.localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      <ThemeHotkey />
      {children}
    </ThemeContext.Provider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeHotkey() {
  const theme = React.useContext(ThemeContext)

  if (!theme) {
    throw new Error("ThemeHotkey must be used inside ThemeProvider")
  }

  const { resolvedTheme, setTheme } = theme

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export { ThemeProvider }
