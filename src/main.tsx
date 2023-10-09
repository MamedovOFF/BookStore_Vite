import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import { RouterProvider } from 'react-router-dom'
import index from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={index} />
  </React.StrictMode>,
)
