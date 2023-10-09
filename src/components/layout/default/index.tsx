import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '../../../context/StoreContext.tsx'
import { useEffect } from 'react'

const Default = () => {
  const {
    userStore: { isAuth },
  } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) navigate('/sign-in')
  }, [isAuth])

  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export default Default
