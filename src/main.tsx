import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';

const router = createBrowserRouter([
  {path: '/', element: <Layout />,
    children:[
      {index:true, element: <Dashboard />},
      {path:'/dashboard', element: <Dashboard />},
    ]
  },
  {path: '*', element: <h1>404 page not found</h1>}

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
