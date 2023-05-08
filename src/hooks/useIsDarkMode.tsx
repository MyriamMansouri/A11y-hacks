import { React, useState, useEffect } from 'react';

export function useIsDarkMode() {
  const [isDark, setIsDark] = useState(null);

    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (prefersDark) {
            setIsDark(true);
        }
    }, []);

  return isDark;
}