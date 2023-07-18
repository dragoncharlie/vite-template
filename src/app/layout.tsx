import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/users">Users page</Link>
      <Outlet/>
    </div>
  )
}

export default Layout
