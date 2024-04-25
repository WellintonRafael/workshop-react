import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Post from './pages/post.tsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/joao",
    element: <Post name='teste' description='teste descr' image='https://github.com/joaomoreiraNI.png'/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
