import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useStore } from '../../../context/StoreContext.tsx'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

const Auth = () => {
  const {
    userStore: { isAuth },
  } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  return (
    <div className="flex flex-col justify-between h-full bg-teal-100">
      <Header />
      <div className="container m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default observer(Auth)
