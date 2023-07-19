import { useCallback, useContext, useEffect } from 'react'
import ThemeContext from '@/_themes/ThemeContext.tsx'

const useTheme = () => {
	const MEDIA = '(prefers-color-scheme: dark)'
	const { theme, setTheme } = useContext(ThemeContext)

	const changeThemeHandler = (value: string) => {
		localStorage.setItem('theme', value)
	}

	const changeTheme = useCallback((value: string) => {
		setTheme(value)
		changeThemeHandler(value)
	}, [])

	const systemThemeChangeHandler = useCallback(() => {
		const media = window.matchMedia(MEDIA)

		if (media.matches) {
			// Theme set to dark.
			setTheme('dark')
		} else {
			// Theme set to light.
			setTheme('light')
		}
		changeThemeHandler('system')
	}, [])

	useEffect(() => {
		const storageTheme = localStorage.getItem('theme')
		if (!storageTheme || storageTheme === 'system') {
			systemThemeChangeHandler()
			window
				.matchMedia(MEDIA)
				.addEventListener('change', systemThemeChangeHandler)
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
