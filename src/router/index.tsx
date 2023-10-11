import { createBrowserRouter } from 'react-router-dom'
import Auth from '../components/layout/auth'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import Default from '../components/layout/default'
import Ecommerce from '../pages/ecommerce'
import Profile from '../pages/profile'
import AddBook from '../pages/addBook'

const index = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        index: true,
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        index: true,
        element: <Ecommerce />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
    ],
  },
])

export default index
