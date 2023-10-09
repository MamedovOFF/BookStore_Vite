import { useStore } from '../../../../../context/StoreContext.tsx'
import Button from '../../../../button'

const Header = () => {
  const {
    userStore: { logout },
  } = useStore()

  return (
    <header className="p-4 bg-blue-300 text-end">
      <Button onClick={() => logout()}>Log Out</Button>
    </header>
  )
}

export default Header
