import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { eventSchema, type EventFormData } from './eventSchema'
import { FormField, Input, Select, Textarea, Button } from '@/components'
import { getEventTypeOptions, getStatusOptions } from '@/utils/translations'
import type { CateringEvent } from '@/types'
import styles from './EventForm.module.css'

interface EventFormProps {
  initialData?: CateringEvent
  onSubmit: (data: EventFormData) => void
  onCancel: () => void
}

export default function EventForm({ initialData, onSubmit, onCancel }: EventFormProps) {
  const { t } = useTranslation('events')
  const { t: tCommon } = useTranslation('common')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData
      ? {
          name: initialData.name,
          client: initialData.client,
          date: initialData.date,
          guests: initialData.guests,
          type: initialData.type,
          status: initialData.status,
          notes: initialData.notes ?? '',
        }
      : {
          type: 'birthday',
          status: 'planning',
        },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label={t('form.eventName')} error={errors.name?.message}>
        <Input {...register('name')} placeholder={t('form.eventNamePlaceholder')} />
      </FormField>

      <FormField label={t('form.clientName')} error={errors.client?.message}>
        <Input {...register('client')} placeholder={t('form.clientNamePlaceholder')} />
      </FormField>

      <div className={styles.row}>
        <FormField label={t('form.date')} error={errors.date?.message}>
          <Input {...register('date')} type="date" />
        </FormField>

        <FormField label={t('form.guests')} error={errors.guests?.message}>
          <Input
            {...register('guests', { valueAsNumber: true })}
            type="number"
            placeholder="50"
            min={1}
          />
        </FormField>
      </div>

      <div className={styles.row}>
        <FormField label={t('form.eventType')} error={errors.type?.message}>
          <Select {...register('type')} options={getEventTypeOptions(t)} />
        </FormField>

        <FormField label={t('form.status')} error={errors.status?.message}>
          <Select {...register('status')} options={getStatusOptions(t)} />
        </FormField>
      </div>

      <FormField label={t('form.notes')} error={errors.notes?.message}>
        <Textarea {...register('notes')} placeholder={t('form.notesPlaceholder')} rows={3} />
      </FormField>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={onCancel} type="button">
          {tCommon('cancel')}
        </Button>
        <Button variant="primary" type="submit">
          {initialData ? t('saveChanges') : t('addEvent')}
        </Button>
      </div>
    </form>
  )
}
