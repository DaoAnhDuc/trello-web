import Button from '@mui/material/Button'
import AccessibleIcon from '@mui/icons-material/Accessible'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
function App() {
  return (
    <>
      <div>Hello</div>
      <Button variant="contained">Hello world</Button>
      <AccessibleIcon/>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
