import { z } from 'zod'

export const requiredString = z.string().min(1, 'This field is required')

export const optionalString = z.string().optional()

export const positiveNumber = z
  .number({ error: 'Must be a number' })
  .min(1, 'Must be greater than 0')
