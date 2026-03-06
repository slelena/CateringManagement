import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'sr', label: 'SR' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className={styles.switcher}>
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          className={[styles.btn, i18n.language === code ? styles.active : '']
            .filter(Boolean)
            .join(' ')}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
