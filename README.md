# Freelance API

Simple NestJS API for managing users and services (seed migrations included).

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL (create a database before running migrations)

## Required environment variables

- DB_HOST (default: `localhost`)
- DB_PORT (default: `5432`)
- DB_USERNAME (no default)
- DB_PASSWORD (no default)
- DB_NAME (no default)
- APP_SECRET (JWT secret used by the auth module)
- PORT (optional, default used by app)

Create a `.env` file in the project root with those variables before running the app.

## Install

```bash
npm install
```

## TypeORM / Migrations

This project uses a `DataSource` defined in `data-source.ts`. Migrations live in `src/migrations`.

- Run migrations (applies seed migrations included in `src/migrations`):

```bash
npm run migration:run
```

- Generate a new migration (TypeORM CLI):

```bash
npm run typeorm -- migration:generate -n MigrationName -d ./data-source.ts
```

- Create an empty migration file:

```bash
npm run typeorm -- migration:create -n MigrationName -d ./data-source.ts
```

- Revert last migration:

```bash
npm run typeorm -- migration:revert -d ./data-source.ts
```

Note: the included seed migrations insert sample users and services. They expect the `user` and `service` tables to exist; if you rely on TypeORM `synchronize` to create tables during development, seeds will work after the first run. For production, prefer disabling `synchronize` and using migrations only.

## Run (development)

```bash
npm run start:dev
```

## Build & Run (production)

```bash
npm run build
npm run start:prod
```

## Useful files

- `data-source.ts` — TypeORM `DataSource` used by the CLI
- `src/migrations` — migration files (seed migrations included)
- `src/users/user.entity.ts` — `User` entity
- `src/services/service.entity.ts` — `Service` entity (relation field is `provider`, DB column `providerId`)

## Notes

- The service → user relation uses the `provider` field, so the foreign key column is `providerId`. Seed migrations must reference `providerId` (this repository already adjusts the seed migration accordingly).
- Ensure `APP_SECRET` is set for JWT authentication to work.

If you'd like, I can add a `.env.example` file showing all variables with placeholders.
