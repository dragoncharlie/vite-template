import React from 'react'
import ReactDOM from 'react-dom/client'
import './_i18n/i18n.ts'
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
