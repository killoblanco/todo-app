import { type CSSObject, type Theme } from '@mui/material'

export const styles = {
  root: (t: Theme): CSSObject => ({
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    padding: t.spacing(4)
  })
}
