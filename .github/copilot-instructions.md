<!-- .github/copilot-instructions.md -->
# Copilot / AI Agent Instructions — webfinals

Keep guidance short and actionable. Focus on repository-specific conventions, commands, and hotspots where change is likely to be made.

1. Big picture
- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS, Drizzle ORM (Postgres), `@t3-oss/env-nextjs` for env validation.
- **Runtime split**: UI lives under `src/app/*` (React server/client components). Server helpers and DB lives under `src/server/*`.

2. Where to start editing
- **Pages / UI**: `src/app/layout.tsx` and `src/app/page.tsx` show the App Router layout and root page.
- **Database layer**: `src/server/db/index.ts` (connection + drizzle init) and `src/server/db/schema.ts` (Drizzle schema examples).
- **Env validation**: `src/env.js` defines required server env vars (`DATABASE_URL`, `NODE_ENV`) and `SKIP_ENV_VALIDATION` opt-out.

3. Developer workflows & commands (exact)
- Install: `pnpm install` (project uses `pnpm`).
- Dev: `pnpm dev` runs `next dev --turbo`.
- Build: `pnpm build` then `pnpm start` / `pnpm preview`.
- Typecheck & lint: `pnpm typecheck`, `pnpm lint`, `pnpm check` (lint + typecheck).
- DB (drizzle-kit):
  - Generate: `pnpm db:generate` (update generated migrations/schema files).
  - Migrate: `pnpm db:migrate` (apply migrations).
  - Push: `pnpm db:push` (force push schema).
  - Studio: `pnpm db:studio` (visual DB UI).
- Local DB helper: use `./start-database.sh` (on Windows, run inside WSL; script sources `.env`).

4. Project-specific patterns & gotchas
- **DB connection caching**: `src/server/db/index.ts` caches the `postgres` client on `globalThis` to avoid reconnects during HMR. When changing connection logic, preserve this pattern in development.
- **Drizzle multi-project schema**: `src/server/db/schema.ts` uses `createTable((name) => `webfinals_${name}`)` to namespace tables; follow this pattern when adding tables.
- **Env validation**: `src/env.js` validates `DATABASE_URL` and `NODE_ENV`. To build in CI or Docker where envs are set differently, `SKIP_ENV_VALIDATION=true` may be needed.
- **Fonts & CSS**: global styles in `src/styles/globals.css`; fonts are injected from `layout.tsx` using `next/font/google`.

5. Integration points
- **Drizzle / Postgres**: `drizzle-orm`, `postgres` driver and `drizzle-kit` are used. Keep SQL-related changes coordinated between `schema.ts` and migration commands in `package.json`.
- **Env package**: `@t3-oss/env-nextjs` — server/client env schemas live in `src/env.js`.

6. Editing guidance & examples
- When adding a new table, update `src/server/db/schema.ts` with `createTable('your_table', ...)` and then run `pnpm db:generate` / `pnpm db:migrate`.
- When adding server-side helpers, put them under `src/server/` to separate from client code. Example: DB code is in `src/server/db/*`.
- If you need to temporarily bypass env validation for CI builds: set `SKIP_ENV_VALIDATION=true` in the environment.

7. Files to reference when changing behavior
- `package.json` — scripts and package manager (`pnpm`).
- `start-database.sh` — local DB bootstrap via Docker/Podman (Windows: run inside WSL).
- `src/server/db/index.ts` and `src/server/db/schema.ts` — DB connection & schema patterns.
- `src/env.js` — canonical source of required env vars.

8. Non-goals / do not change
- Do not remove the `globalThis` DB cache in `src/server/db/index.ts` without understanding HMR behaviour.
- Do not expose server-only env vars to client; use `NEXT_PUBLIC_` prefix intentionally.

If any of these points are unclear or you want more examples (e.g., a sample migration flow), tell me which area to expand.  
