import { Stack, Hidden } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../ui/sidebar'
import { styles } from './styles'

export const Layout: React.FC = () => {
  return (
    <Stack direction="row" spacing={4} sx={styles.root}>
      <Outlet />
    </Stack>
  )
}
