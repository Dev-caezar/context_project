import React from 'react'
import Signup from './auth/signup/Signup'
import { createBrowserRouter } from 'react-router-dom'
import Login from './auth/login/Login'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layouts'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Layout />,
      children:[
        {
          index: true,
          element: <Dashboard />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '',
      element: <Signup/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
