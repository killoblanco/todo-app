import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import { LandingPage } from './router/pages/landing'
import { AppTheme } from './theme'

const root = document.getElementById('root') as HTMLElement

const Core: React.FC = () => (
  <StrictMode>
    <AppTheme>
      <AppRouter />
    </AppTheme>
  </StrictMode>
)

ReactDOM.createRoot(root).render(<Core />)
