import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import toast, { Toaster } from 'react-hot-toast';
import UserContext from './authentication/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserContext>
  <Toaster></Toaster>
  <RouterProvider router={router}></RouterProvider>
  </UserContext>

  </StrictMode>,
)
