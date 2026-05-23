# app-testing-cookies

React + Vite para GitHub Pages em **`auth.agottani.dev`**: apenas **lê** o cookie `referral_id` definido pelo app em `app.agottani.dev` (mesmo valor com `Domain=.agottani.dev`).

O hook `useReferralCookie` suporta `syncFromQuery: false` aqui para não sobrescrever o cookie ao testar só com query-string.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy no GitHub Pages

1. **Settings → Pages** → Source: **GitHub Actions**.
2. Push na `main`; o artefato publica `dist/` e inclui `public/CNAME` com `auth.agottani.dev`.

## Validar fluxo entre subs

1. `https://app.agottani.dev/?referral_id=XYZ`
2. `https://auth.agottani.dev` — deve exibir o mesmo `referral_id`.
