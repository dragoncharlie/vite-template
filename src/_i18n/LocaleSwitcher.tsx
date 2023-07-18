import {i18n as config} from './i18n-config'
import {useTranslation} from "react-i18next";

export default function LocaleSwitcher() {
  const {i18n} = useTranslation();

  const changeLanguage = (locale: string) => () => {
    void i18n.changeLanguage(locale)
  }

  return (
    <div>
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
