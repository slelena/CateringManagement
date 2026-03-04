import type { EventStatus } from '@/types'
import styles from './Badge.module.css'

interface BadgeProps {
  status: EventStatus
  className?: string
}

export default function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={[styles.badge, styles[status.toLowerCase()], className]
        .filter(Boolean)
        .join(' ')}
    >
      {status}
    </span>
  )
}