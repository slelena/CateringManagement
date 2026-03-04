import { useEffect } from 'react'
import styles from './Toast.module.css'

interface ToastProps {
  message: string
  visible: boolean
  onHide: () => void
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(onHide, 2500)
    return () => clearTimeout(timer)
  }, [visible, onHide])

  return (
    <div className={[styles.toast, visible ? styles.visible : ''].filter(Boolean).join(' ')}>
      {message}
    </div>
  )
}