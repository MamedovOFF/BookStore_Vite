import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Auth = () => {
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

export default Auth
