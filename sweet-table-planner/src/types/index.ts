// ─── Pages ───────────────────────────────────────────────────────────────────

export type Page =
  | "dashboard"
  | "events"
  | "builder"
  | "shopping"
  | "recipes"
  | "settings";

// ─── Enums ───────────────────────────────────────────────────────────────────

export type EventStatus = "Planning" | "Confirmed" | "Pending" | "Completed";

export type EventType =
  | "Birthday"
  | "Baby Shower"
  | "Wedding"
  | "Bridal Shower"
  | "Graduation"
  | "Quinceañera"
  | "Corporate"
  | "Other";

export type RecipeDifficulty = "Easy" | "Medium" | "Advanced";

// ─── Category ────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

// ─── Item ────────────────────────────────────────────────────────────────────

export interface Item {
  id: string;
  name: string;
  emoji: string;
  price: number;
  unit: string;
  categoryId: string;
  notes?: string;
}

export interface TableItem extends Item {
  qty: number;
}

// ─── Event ───────────────────────────────────────────────────────────────────

export interface CateringEvent {
  id: string;
  name: string;
  client: string;
  date: string;
  guests: number;
  type: EventType;
  status: EventStatus;
  notes?: string;
  items: TableItem[];
  cost: number;
  clientPrice: number;
  markup: number;
}

// ─── Recipe ──────────────────────────────────────────────────────────────────

export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  category: string;
  servings: string;
  time: string;
  difficulty: RecipeDifficulty;
  ingredients: string[];
  steps: string[];
  notes?: string;
}

// ─── API ─────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  status: number;
}
