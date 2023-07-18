import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import router from './router.tsx'

import {
  RouterProvider,
} from 'react-router-dom'
import ThemeProvider from "./_themes/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
