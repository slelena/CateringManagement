import { useTranslation } from 'react-i18next'
import { Badge, Button, Card } from '@/components'
import type { CateringEvent } from '@/types'
import styles from './EventCard.module.css'

interface EventCardProps {
  event: CateringEvent
  onEdit: (event: CateringEvent) => void
  onDelete: (id: string) => void
}

export default function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  const { t } = useTranslation('events')
  const { t: tCommon } = useTranslation('common')
  const date = new Date(event.date + 'T00:00:00')

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{event.name}</h3>
        <p className={styles.meta}>
          {t(`types.${event.type}`)} ·{' '}
          {date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>{t('card.client')}</span>
            <strong>{event.client}</strong>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>{t('card.guests')}</span>
            <strong>{event.guests || '—'}</strong>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>{t('card.price')}</span>
            <strong>{event.clientPrice ? `$${event.clientPrice.toFixed(0)}` : '—'}</strong>
          </div>
        </div>

        {event.notes && <p className={styles.notes}>"{event.notes}"</p>}

        <Badge status={event.status} />

        <div className={styles.actions}>
          <Button variant="secondary" size="sm" onClick={() => onEdit(event)}>
            ✏ {tCommon('edit')}
          </Button>
          <Button variant="danger" size="sm" onClick={() => onDelete(event.id)}>
            🗑 {tCommon('delete')}
          </Button>
        </div>
      </div>
    </Card>
  )
}
