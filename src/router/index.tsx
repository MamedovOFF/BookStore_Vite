import { createBrowserRouter } from 'react-router-dom'
import Auth from '../components/layout/auth'
import SignIn from '../pages/signIn'

const index = createBrowserRouter([
  {
    path: '/',
    element: (
      <h1 className="text-3xl font-bold underline text-amber-300">
        Hello world!
      </h1>
    ),
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
        element: <h1>Sign up</h1>,
      },
    ],
  },
])

export default index
