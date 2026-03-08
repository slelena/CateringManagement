import type { EventStatus, EventType } from '@/types'

export function getEventTypeOptions(t: (key: string) => string) {
  return [
    { value: 'birthday', label: t('types.birthday') },
    { value: 'baby_shower', label: t('types.baby_shower') },
    { value: 'wedding', label: t('types.wedding') },
    { value: 'bridal_shower', label: t('types.bridal_shower') },
    { value: 'graduation', label: t('types.graduation') },
    { value: 'corporate', label: t('types.corporate') },
    { value: 'other', label: t('types.other') },
  ] satisfies { value: EventType; label: string }[]
}

export function getStatusOptions(t: (key: string) => string) {
  return [
    { value: 'planning', label: t('status.planning') },
    { value: 'confirmed', label: t('status.confirmed') },
    { value: 'pending', label: t('status.pending') },
    { value: 'completed', label: t('status.completed') },
  ] satisfies { value: EventStatus; label: string }[]
}
