import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

// Shared layout wrapper rendered on every route.
// Manages dark mode by toggling the "dark" class on <html>, which is the
// standard approach for Tailwind's darkMode: "class" strategy.
// Persists the preference to localStorage across sessions.
export default function MainLayout() {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    )

    // Keep the <html> element in sync with the isDark state
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    const toggleDark = () => {
        setIsDark(prev => {
            const next = !prev
            localStorage.setItem("theme", next ? "dark" : "light")
            return next
        })
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar isDark={isDark} onToggle={toggleDark} />
            <main className="flex-1 items-start bg-gray-50 dark:bg-gray-900">
                <Outlet />
            </main>
        </div>
    )
}
