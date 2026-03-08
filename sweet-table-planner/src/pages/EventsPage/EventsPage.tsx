import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Button, EmptyState, Toast } from '@/components'
import { MOCK_EVENTS } from '@/utils/mockData'
import type { CateringEvent } from '@/types'
import type { EventFormData } from './EventForm/eventSchema'
import EventCard from './EventCard/EventCard'
import EventForm from './EventForm/EventForm'
import styles from './EventsPage.module.css'

export default function EventsPage() {
  const { t } = useTranslation('events')
  const [events, setEvents] = useState<CateringEvent[]>(MOCK_EVENTS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<CateringEvent | null>(null)
  const [toast, setToast] = useState({ visible: false, message: '' })

  function showToast(message: string) {
    setToast({ visible: true, message })
  }

  function handleAdd() {
    setEditingEvent(null)
    setIsModalOpen(true)
  }

  function handleEdit(event: CateringEvent) {
    setEditingEvent(event)
    setIsModalOpen(true)
  }

  function handleDelete(id: string) {
    if (!window.confirm(t('deleteConfirm'))) return
    setEvents((prev) => prev.filter((e) => e.id !== id))
    showToast(t('toast.deleted'))
  }

  function handleSubmit(data: EventFormData) {
    if (editingEvent) {
      setEvents((prev) =>
        prev.map((e) => (e.id === editingEvent.id ? { ...editingEvent, ...data } : e))
      )
      showToast(t('toast.updated'))
    } else {
      const newEvent: CateringEvent = {
        ...data,
        id: Date.now().toString(),
        items: [],
        cost: 0,
        clientPrice: 0,
        markup: 0,
      }
      setEvents((prev) => [...prev, newEvent])
      showToast(t('toast.added'))
    }
    setIsModalOpen(false)
  }

  return (
    <div>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.subtitle}>{t('subtitle')}</p>

      <div className={styles.toolbar}>
        <Button onClick={handleAdd}>✚ {t('newEvent')}</Button>
      </div>

      {events.length === 0 ? (
        <EmptyState emoji="📅" message={t('emptyState.message')} hint={t('emptyState.hint')} />
      ) : (
        <div className={styles.grid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}

      <Modal
        title={editingEvent ? t('editEvent') : t('newEvent')}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <EventForm
          initialData={editingEvent ?? undefined}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Toast
        message={toast.message}
        visible={toast.visible}
        onHide={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  )
}
