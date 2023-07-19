import { useContext, useEffect } from 'react'
import ThemeContext from '@/_themes/ThemeContext.tsx'

// TODO add system change listener
const useTheme = () => {
	const MEDIA = '(prefers-color-scheme: dark)'
	const { theme, setTheme } = useContext(ThemeContext)

	const changeThemeHandle = (value: string) => {
		localStorage.setItem('theme', value)
	}

	const changeTheme = (value: string) => {
		setTheme(value)
		changeThemeHandle(value)
	}

	useEffect(() => {
		const storageTheme = localStorage.getItem('theme')
		if (!storageTheme || storageTheme === 'system') {
			const media = window.matchMedia(MEDIA)

			if (media.matches) {
				// Theme set to dark.
				setTheme('dark')
			} else {
				// Theme set to light.
				setTheme('light')
			}
			changeThemeHandle('system')
		} else {
			setTheme(storageTheme)
		}
	}, [])

	return {
		theme,
		setTheme: changeTheme,
	}
}

export default useTheme
