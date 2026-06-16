# 여기 있어 감정카드

로버트 플루치크의 '감정의 바퀴' 이론을 바탕으로 24가지 감정을 카드로 만나며 자신의 마음을 들여다보는 감정 학습 웹앱입니다.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- 프런트엔드 SPA는 `artifacts/emotion-card-cloud` (React + Vite + Tailwind). 백엔드/DB는 사용하지 않습니다.
- 두 가지 모드: **전체 보기**(계열별 24개 감정 카드, 카드를 누르면 약·강 단계가 펼쳐짐)와 **랜덤뽑기**(4·8·24개 범위에서 무작위로 한 장 뽑기).
- 감정 데이터의 단일 출처는 `artifacts/emotion-card-cloud/src/data/emotions.ts` 입니다.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
