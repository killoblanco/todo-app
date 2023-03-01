import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../layout'
import { LandingPage } from './pages/landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> }
    ]
  }
])

export const AppRouter: React.FC = () => (<RouterProvider router={router} />)
