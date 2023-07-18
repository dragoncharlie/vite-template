import {createBrowserRouter} from 'react-router-dom'

import Root from './app/layout.tsx'
import Home from './app/page.tsx'
import Users from './app/users/page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ]
  },

]);

export default router
