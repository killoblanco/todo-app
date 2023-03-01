import { type ThemeOptions } from '@mui/material'
import { type DarkMode } from './types'

export const palette = ({ darkMode }: DarkMode): Pick<ThemeOptions, 'palette'> => ({
  palette: {
    mode: darkMode ? 'dark' : 'light'
  }
})
