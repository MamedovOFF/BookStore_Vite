import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const redirectButtonClock = () => {
    if (location.pathname === '/sign-in') navigate('/sign-up')
    else navigate('/sign-in')
  }
  return (
    <header className="p-4 bg-light-blue-100 text-end">
      <Button onClick={redirectButtonClock}>
        {location.pathname === '/sign-in' ? 'Sign Up' : 'Sign In'}
      </Button>
    </header>
  )
}

export default Header
