import styles from './EmptyState.module.css'

interface EmptyStateProps {
  emoji: string
  message: string
  hint?: string
  className?: string
}

export default function EmptyState({
  emoji,
  message,
  hint,
  className,
}: EmptyStateProps) {
  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')}>
      <span className={styles.emoji}>{emoji}</span>
      <p className={styles.message}>{message}</p>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}