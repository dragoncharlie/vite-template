import { Link, Outlet } from 'react-router-dom'

function Layout() {
	return (
		<div>
			<div className='flex items-center gap-2 mb-8'>
				<Link className='hover:text-primary-500' to='/'>
					Home page
				</Link>
				<Link className='hover:text-primary-500' to='/users'>
					Users page
				</Link>
			</div>
			<Outlet />
		</div>
	)
}

export default Layout
