import ThemeSwitcher from '../_themes/ThemeSwitcher.tsx'
import { useTranslation } from 'react-i18next'
import LocaleSwitcher from '../_i18n/LocaleSwitcher.tsx'

export default function Home() {
	const { t } = useTranslation()

	return (
		<div>
			<ThemeSwitcher />
			<LocaleSwitcher />
			<p>{t('active_locale')}</p>
			<p>Home</p>
		</div>
	)
}
