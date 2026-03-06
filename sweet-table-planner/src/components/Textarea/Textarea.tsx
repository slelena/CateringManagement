import { forwardRef } from 'react'
import styles from './Textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={[styles.textarea, className].filter(Boolean).join(' ')}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
