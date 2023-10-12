import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '../../../context/StoreContext.tsx'
import { useEffect } from 'react'
import Header from './components/header'
import { observer } from 'mobx-react-lite'
import { Typography } from '@material-tailwind/react'

const Default = () => {
  const {
    userStore: { checkAuth },
  } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth().then((res) => {
      if (!res) navigate('/sign-in')
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-light-blue-50">
      <Header />
      <div className="container m-auto">
        <Outlet />
      </div>
      <footer className="p-4 bg-light-blue-100">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 Mamedov_dev
        </Typography>
      </footer>
    </div>
  )
}

export default observer(Default)
