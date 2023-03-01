import { CssBaseline, ThemeProvider } from '@mui/material'
import { type PropsWithChildren } from 'react'
import { useThemeBuilder } from './store'

export const AppTheme: React.FC = ({ children }: PropsWithChildren) => {
  const theme = useThemeBuilder()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
