import useTheme from '@/_themes/useTheme.tsx'

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()

	return (
		<button
			onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
			className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl'
		>
			Toggle Theme
		</button>
	)
}

export default ThemeSwitcher
