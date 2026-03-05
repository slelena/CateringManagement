import { Routes, Route, NavLink } from 'react-router-dom'
import DashboardPage from '@/pages/DashboardPage/DashboardPage'
import EventsPage from '@/pages/EventsPage/EventsPage'
import BuilderPage from '@/pages/BuilderPage/BuilderPage'
import ShoppingPage from '@/pages/ShoppingPage/ShoppingPage'
import RecipesPage from '@/pages/RecipesPage/RecipesPage'
import SettingsPage from '@/pages/SettingsPage/SettingsPage'
import styles from './App.module.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/events', label: 'Events', icon: '📅' },
  { to: '/builder', label: 'Builder', icon: '🍰' },
  { to: '/shopping', label: 'Shopping', icon: '🛒' },
  { to: '/recipes', label: 'Recipes', icon: '📖' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Sweet <span>Table</span> Planner
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [styles.navBtn, isActive ? styles.active : ''].filter(Boolean).join(' ')
              }
            >
              {icon} {label}
            </NavLink>
          ))}
        </nav>
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
