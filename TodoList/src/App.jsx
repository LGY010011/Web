import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider} from './context/TodoContext'
import TodoHomePage from './pages/todo-home-page'
import NotFound from './pages/not-found-page'
import TodoPage from './pages/todo-page'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout/root-layout'
import { Navigate } from 'react-router-dom'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/todo" replace />, // '/'로 오면 '/todo'로 리다이렉트
  },
  {
    path: '/todo',
    element: <RootLayout />,
    errorElement: <NotFound/>,
    children: [
      {
        index:true,
        element: <TodoHomePage/>
      },
      {
        path:':id',
        element: <TodoPage/>
      }
    ]
  }
])


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider> {/* TodoProvider를 QueryClientProvider 내에 배치 */}
        <RouterProvider router={router} />
      </TodoProvider>
    </QueryClientProvider>
  )
}

export default App

