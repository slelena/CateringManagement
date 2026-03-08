import { z } from 'zod'
import { requiredString, positiveNumber, optionalString } from '@/utils/schema'

export const eventSchema = z.object({
  name: requiredString,
  client: requiredString,
  date: requiredString,
  guests: positiveNumber,
  type: z.enum([
    'birthday',
    'baby_shower',
    'wedding',
    'bridal_shower',
    'graduation',
    'corporate',
    'other',
  ]),
  status: z.enum(['planning', 'confirmed', 'pending', 'completed']),
  notes: optionalString,
})

export type EventFormData = z.infer<typeof eventSchema>
