import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '../../../context/StoreContext.tsx'
import { useEffect } from 'react'
import Header from './components/header'
import { observer } from 'mobx-react-lite'

const Default = () => {
  const {
    userStore: { isAuth },
  } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) navigate('/sign-in')
  }, [isAuth])

  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="bg-cyan-100">
        <div className="container m-auto">
          <Outlet />
        </div>
      </div>
      <footer className="p-4 bg-blue-300">footer</footer>
    </div>
  )
}

export default observer(Default)
