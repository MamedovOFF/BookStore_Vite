import { createBrowserRouter } from 'react-router-dom'
import Auth from '../components/layout/auth'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import Default from '../components/layout/default'

const index = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        index: true,
        element: <h1>app</h1>,
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
