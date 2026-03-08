import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { MOCK_EVENTS } from '@/utils/mockData'
import { Card, Badge, EmptyState } from '@/components'
import type { CateringEvent } from '@/types'
import styles from './DashboardPage.module.css'

function getStats(events: CateringEvent[]) {
  const now = new Date()
  const thisMonth = events.filter((e) => {
    const d = new Date(e.date)
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  })
  const revenue = events.reduce((sum, e) => sum + e.clientPrice, 0)
  const avg = events.length ? revenue / events.length : 0
  return { total: events.length, revenue, thisMonth: thisMonth.length, avg }
}

function getUpcoming(events: CateringEvent[]) {
  const now = new Date()
  return events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)
}

export default function DashboardPage() {
  const { t } = useTranslation('dashboard')
  const stats = useMemo(() => getStats(MOCK_EVENTS), [])
  const upcoming = useMemo(() => getUpcoming(MOCK_EVENTS), [])

  return (
    <div>
      <h1 className={styles.title}>{t('greeting')}</h1>
      <p className={styles.subtitle}>{t('subtitle')}</p>

      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <div className={styles.statLabel}>{t('stats.totalEvents')}</div>
          <div className={styles.statValue}>{stats.total}</div>
        </Card>
        <Card className={styles.statCard}>
          <div className={styles.statLabel}>{t('stats.totalRevenue')}</div>
          <div className={styles.statValue}>${stats.revenue.toFixed(0)}</div>
        </Card>
        <Card className={styles.statCard}>
          <div className={styles.statLabel}>{t('stats.thisMonth')}</div>
          <div className={styles.statValue}>{stats.thisMonth}</div>
        </Card>
        <Card className={styles.statCard}>
          <div className={styles.statLabel}>{t('stats.avgPrice')}</div>
          <div className={styles.statValue}>${stats.avg.toFixed(0)}</div>
        </Card>
      </div>

      <h2 className={styles.sectionTitle}>{t('upcomingEvents')}</h2>

      {upcoming.length === 0 ? (
        <EmptyState emoji="🎂" message={t('emptyState.message')} hint={t('emptyState.hint')} />
      ) : (
        <div className={styles.eventList}>
          {upcoming.map((event) => {
            const date = new Date(event.date)
            return (
              <Card key={event.id} className={styles.eventCard}>
                <div className={styles.dateBadge}>
                  <span className={styles.month}>
                    {date.toLocaleString('default', { month: 'short' }).toUpperCase()}
                  </span>
                  <span className={styles.day}>{date.getDate()}</span>
                </div>
                <div className={styles.eventInfo}>
                  <div className={styles.eventName}>{event.name}</div>
                  <div className={styles.eventMeta}>
                    {event.client} · {event.guests} guests · {event.type}
                  </div>
                </div>
                <Badge status={event.status} />
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
