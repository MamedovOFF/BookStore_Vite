import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import { RouterProvider } from 'react-router-dom'
import index from './router'
import StoreContext from './context/StoreContext.tsx'
import Store from './store'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={new Store()}>
      <ThemeProvider>
        <RouterProvider router={index} />
      </ThemeProvider>
    </StoreContext.Provider>
  </React.StrictMode>,
)
