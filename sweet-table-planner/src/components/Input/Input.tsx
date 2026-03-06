import { forwardRef } from 'react'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input ref={ref} className={[styles.input, className].filter(Boolean).join(' ')} {...props} />
  )
})

Input.displayName = 'Input'

export default Input
