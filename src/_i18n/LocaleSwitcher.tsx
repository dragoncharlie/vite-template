import { i18n as config } from './i18n-config'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

export default function LocaleSwitcher() {
	const { i18n } = useTranslation()

	const changeLanguage = (locale: string) => () => {
		void i18n.changeLanguage(locale)
	}

	return (
		<div>
			<Helmet
				htmlAttributes={{
					lang: i18n.language,
					dir: i18n.dir(),
				}}
			/>
			<p>Locale switcher:</p>
			<ul>
				{config.locales.map((locale) => {
					return (
						<li key={locale}>
							<button onClick={changeLanguage(locale)}>{locale}</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
