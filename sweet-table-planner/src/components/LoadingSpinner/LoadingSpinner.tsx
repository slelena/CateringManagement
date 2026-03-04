import styles from './LoadingSpinner.module.css'

interface LoadingSpinnerProps {
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export default function LoadingSpinner({
  size = 'default',
  className,
}: LoadingSpinnerProps) {
  return (
    <div
      className={[styles.spinner, styles[size], className]
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-label="Loading"
    />
  )
}