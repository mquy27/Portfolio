# Implementation Plan: Light/Dark Theme Toggle

This plan outlines the steps to implement a fully functional light/dark theme toggle for the portfolio website.
The project already utilizes Tailwind CSS v4 with CSS variables for theming (defined in `index.css`). We will leverage this foundation.

## Objective
- Allow users to toggle between Light and Dark modes.
- Persist the user's preference in `localStorage`.
- Automatically finish initializing the theme based on system preference or saved setting.
- Update the UI to reflect the selected theme seamlessly.

## 1. Create Theme Context (`src/components/ThemeProvider.jsx`)

We will create a Context Provider to manage the theme state globally. This allows any component to access the current theme and the toggle function.

**Key Features:**
- **State**: `theme` ('light' | 'dark' | 'system').
- **Effect**:
    - On mount, check `localStorage` or `window.matchMedia('(prefers-color-scheme: dark)')`.
    - Add or remove the `dark` class from `document.documentElement`.
- **Context API**: Provide `theme` and `setTheme`.

```javascript
/* src/components/ThemeProvider.jsx (Simplified Logic) */
import { createContext, useContext, useEffect, useState } from "react"

// ... Context definition ...

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }) {
   // ... implementation of state and useEffect to toggle class ...
}

export const useTheme = () => useContext(ThemeProviderContext)
```

## 2. Create Theme Toggle Component (`src/components/ThemeToggle.jsx`)

A reusable button component that switches between themes.

**UI Design:**
- Use `Sun` and `Moon` icons from `lucide-react`.
- When in Light mode, show Sun (or Moon to switch).
- When in Dark mode, show Moon (or Sun to switch).
- Add smooth transition animations.

## 3. Integrate into App (`src/main.jsx` & `src/App.jsx`)

- Wrap the application with `ThemeProvider`.
- Place the `ThemeToggle` component in a global layout position (e.g., fixed in the corner or in the Navigation bar/Home).

## 4. Refine Styles for Dark Mode

Since `index.css` already defines semantic colors (`--background`, `--foreground`, etc.) and `body` uses them, global styles should work automatically.
However, we need to check specific components that might have hardcoded colors (e.g., `bg-white`, `text-black`) and update them to use semantic classes (`bg-background`, `text-foreground` or `dark:bg-gray-900`).

**Specific Files to Check:**
- `src/components/Home.jsx`: Check for hardcoded backgrounds.
- `src/components/Photography.jsx`: Check hardcoded gradients or colors.
- `src/components/Masonry.jsx`: Check overlays and card backgrounds.

## Implementation Steps

1.  **Create `src/components/ThemeProvider.jsx`**: Implement the logic.
2.  **Create `src/components/ThemeToggle.jsx`**: Implement the UI.
3.  **Update `src/main.jsx`**: Wrap `<App />` with `<ThemeProvider>`.
4.  **Update `src/components/Home.jsx`**: Add `ThemeToggle` to the UI (e.g., absolute position top-right).
5.  **Review & Fix**: Manually verify and update hardcoded generic colors in key components to ensure they respond to the theme variable changes.

## Verification
- Click toggle -> Class `dark` toggles on `html`.
- Refresh page -> Theme persists.
- Check contrast and visibility in both modes.
