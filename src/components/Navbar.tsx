type NavbarProps = {
    isDark: boolean
    onToggle: () => void
}

// Top navigation bar shown on every page.
// Switches between a light and dark appearance based on the current theme.
export default function Navbar({ isDark, onToggle }: NavbarProps) {
    return (
        <nav className="w-full bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-transparent">
            <div className="mx-auto flex h-16 justify-between px-4 sm:px-8 md:px-12">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white">World Cup 2026</h1>
                </div>
                <div className="flex items-center">
                    <button onClick={onToggle} className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white font-medium">
                        <span>{isDark ? "☀️" : "🌙"}</span>
                        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
