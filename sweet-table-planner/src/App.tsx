import { Routes, Route, NavLink } from 'react-router-dom'
import DashboardPage from '@/pages/DashboardPage/DashboardPage'
import EventsPage from '@/pages/EventsPage/EventsPage'
import BuilderPage from '@/pages/BuilderPage/BuilderPage'
import ShoppingPage from '@/pages/ShoppingPage/ShoppingPage'
import RecipesPage from '@/pages/RecipesPage/RecipesPage'
import SettingsPage from '@/pages/SettingsPage/SettingsPage'
import styles from './App.module.css'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const NAV_ITEMS = [
  { to: '/', labelKey: 'nav.home', icon: '🏠' },
  { to: '/events', labelKey: 'nav.events', icon: '📅' },
  { to: '/builder', labelKey: 'nav.builder', icon: '🍰' },
  { to: '/shopping', labelKey: 'nav.shopping', icon: '🛒' },
  { to: '/recipes', labelKey: 'nav.recipes', icon: '📖' },
  { to: '/settings', labelKey: 'nav.settings', icon: '⚙️' },
]

export default function App() {
  const { t } = useTranslation('common')
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Sweet <span>Table</span> Planner
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, labelKey, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [styles.navBtn, isActive ? styles.active : ''].filter(Boolean).join(' ')
              }
            >
              {icon} {t(labelKey)}
            </NavLink>
          ))}
        </nav>
        <LanguageSwitcher />
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </>
  )
}
