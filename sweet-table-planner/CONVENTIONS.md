src/
components/ # shared reusable components (Button, Modal, Card)
pages/ # one folder per page
hooks/ # custom React hooks (e.g. useLocalStorage)
types/ # shared TypeScript types and interfaces
utils/ # pure helper functions (pricing, formatting)
test/ # shared test helpers
assets/ # fonts, images, icons
App.tsx
main.tsx
index.css

One component per file
Component folders contain: Component.tsx, Component.css, Component.test.tsx
No inline styles — use CSS modules or a dedicated .css file per component
All types and interfaces live in src/types/ and are exported from an index.ts
No any in TypeScript — ESLint rule to enforce this