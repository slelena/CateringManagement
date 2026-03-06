import styles from './FormField.module.css'

interface FormFieldProps {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}

export default function FormField({ label, error, children, className }: FormFieldProps) {
  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
