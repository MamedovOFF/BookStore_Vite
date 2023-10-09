import { createBrowserRouter } from 'react-router-dom'
import Auth from '../components/layout/auth'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import Default from '../components/layout/default'
import Ecommerce from '../pages/ecommerce'

const index = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        index: true,
        element: <Ecommerce />,
      },
    ],
  },
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
])

export default index
