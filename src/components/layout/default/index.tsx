import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '../../../context/StoreContext.tsx'
import { useEffect } from 'react'
import Header from './components/header'
import { observer } from 'mobx-react-lite'

const Default = () => {
  const {
    userStore: { isAuth, checkAuth },
  } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth().then((res) => {
      if (!res) navigate('/sign-in')
    })
  }, [])

  useEffect(() => {
    if (!isAuth) navigate('/sign-in')
  }, [isAuth])

  return (
    <div className="flex flex-col bg-cyan-100 min-h-screen">
      <Header />
      <div className="container m-auto">
        <Outlet />
      </div>
      <footer className="p-4 bg-blue-300">footer</footer>
    </div>
  )
}

export default observer(Default)
