# 1911 Café POS — Next.js + TypeScript

Rocket-compatible Next.js + TypeScript repository containing the current working 1911 POS.

## Repository structure

- `app/` — Next.js App Router shell.
- `public/pos/index.html` — current working POS preserved as-is during the compatibility migration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Migration strategy

This repository intentionally uses a thin Next.js + TypeScript shell around the existing production POS. This avoids rewriting the working Firebase authentication, Firestore business namespace, listeners, persistence, tables, orders, inventory, recipes, supplier payments, revenue reporting, and responsive UI during the initial Rocket import.

The legacy POS is served at `/pos/index.html` and can be progressively migrated into typed React components later.

Do not change Firebase configuration, document IDs, business namespace, authentication flow, or security rules as part of the compatibility migration unless that change is intentional and separately tested.
