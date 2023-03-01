import { createTheme, responsiveFontSizes, useMediaQuery, type Theme } from '@mui/material'
import { useEffect } from 'react'
import { create } from 'zustand'
import { palette } from './palette'
import { type DarkModeStore } from './types'
import { typography } from './typography'

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => { set({ darkMode }) },
  toggleDarkMode: () => { set((state) => ({ darkMode: !state.darkMode })) }
}))

export const useThemeBuilder = (): Theme => {
  const { darkMode, setDarkMode } = useDarkModeStore()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setDarkMode(prefersDarkMode)
  }, [prefersDarkMode])

  return responsiveFontSizes(createTheme({
    ...palette({ darkMode }),
    ...typography
  }))
}
