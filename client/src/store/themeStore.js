import { create } from "zustand";

// Helper function to apply theme to document
const applyTheme = (isDark) => {
	if (typeof document !== "undefined") {
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}
};

// Get initial theme from localStorage or system preference
const getInitialTheme = () => {
	if (typeof window === "undefined") return false;
	
	const saved = localStorage.getItem("theme-storage");
	if (saved) {
		try {
			const parsed = JSON.parse(saved);
			return parsed.state?.isDarkMode || false;
		} catch (e) {
			// If parsing fails, check system preference
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
	}
	// Check system preference if no saved theme
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeStore = create((set) => {
	const initialState = getInitialTheme();
	// Apply initial theme
	applyTheme(initialState);

	return {
		isDarkMode: initialState,
		toggleTheme: () => {
			set((state) => {
				const newMode = !state.isDarkMode;
				applyTheme(newMode);
				// Save to localStorage
				localStorage.setItem("theme-storage", JSON.stringify({ state: { isDarkMode: newMode } }));
				return { isDarkMode: newMode };
			});
		},
		setTheme: (isDark) => {
			applyTheme(isDark);
			// Save to localStorage
			localStorage.setItem("theme-storage", JSON.stringify({ state: { isDarkMode: isDark } }));
			set({ isDarkMode: isDark });
		},
	};
});

export default ThemeStore;
