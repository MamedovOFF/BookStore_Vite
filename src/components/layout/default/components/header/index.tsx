import { useStore } from '../../../../../context/StoreContext.tsx'
import Button from '../../../../button'
import { Link } from 'react-router-dom'

const Header = () => {
  const {
    userStore: { logout },
  } = useStore()

  return (
    <header className="p-4 bg-blue-300">
      <div className="flex justify-between items-center">
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link
                to="/"
                className="text-gray-900 hover:bg-cyan-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Ecommerce
              </Link>
            </li>
            <li>
              <Link
                to="/add-book"
                className="text-gray-900 hover:bg-cyan-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 hover:bg-cyan-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Add Author
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-900 hover:bg-cyan-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <Button onClick={() => logout()}>Log Out</Button>
      </div>
    </header>
  )
}

export default Header
