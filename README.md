# gradelib-api

REST API for **GradeLib** - an electronic journal and learning management system for educational institutions.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [npm](https://www.npmjs.com/) v10+
- [Docker](https://www.docker.com/)

---

## Environment variables

The project uses two env files:

| File | Purpose |
|------|---------|
| `.env` | Shared variables loaded in all environments |
| `.env.development` | Development-specific variables (used by the dev server and Docker Compose) |

Copy the examples and fill in the values:

```bash
cp .env.example .env
cp .env.development.example .env.development
```

### `.env`

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | Runtime environment (`development`, `production`) |

### `.env.development`

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | HTTP port the API listens on | `3000` |
| `DATABASE_HOST` | PostgreSQL host | `localhost` |
| `DATABASE_PORT` | PostgreSQL port | `5432` |
| `DATABASE_USERNAME` | PostgreSQL user | `postgres` |
| `DATABASE_PASSWORD` | PostgreSQL password | `postgres` |
| `DATABASE_NAME` | PostgreSQL database name | `db_name` |
| `PGADMIN_EMAIL` | pgAdmin login email | `admin@admin.com` |
| `PGADMIN_PASSWORD` | pgAdmin password | `admin` |
| `PGADMIN_PORT` | pgAdmin web UI port | `5050` |

---

## Running local services (Docker Compose)

Docker Compose spins up **PostgreSQL 16** and **pgAdmin 4** for local development.

```bash
# Start containers in the background
npm run docker:up

# Stop containers
npm run docker:down

# Stop containers and remove volumes (full reset)
npm run docker:reset
```

After `docker:up`, pgAdmin is available at `http://localhost:<PGADMIN_PORT>`.

---

## Installation

```bash
npm install
```

---

## Starting the development server

```bash
npm run start:dev
```

The API will be available at `http://localhost:<PORT>` (default `3000`).

---

## Available scripts

### Application

| Script | Description |
|--------|-------------|
| `npm run start` | Start the application |
| `npm run start:dev` | Start in watch mode (auto-reload on changes) |
| `npm run start:debug` | Start in debug + watch mode |
| `npm run start:prod` | Run the compiled production build |
| `npm run build` | Compile TypeScript to `dist/` |

### Code quality

| Script | Description |
|--------|-------------|
| `npm run lint` | Run ESLint across `src/` and `test/` |
| `npm run format` | Auto-format code with Prettier |

### Database migrations (TypeORM)

| Script | Description |
|--------|-------------|
| `npm run migration:run` | Apply all pending migrations |
| `npm run migration:generate` | Generate a new migration from entity changes |
| `npm run migration:create` | Create an empty migration file |
| `npm run migration:revert` | Revert the last applied migration |
| `npm run migration:show` | List all migrations and their status |

### Testing

| Script | Description |
|--------|-------------|
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:cov` | Run unit tests with coverage report |
| `npm run test:e2e` | Run end-to-end tests |

---

## Project structure

```
src/
├── app.module.ts          # Root application module
├── main.ts                # Application entry point
├── data-source.ts         # TypeORM DataSource (used by CLI)
├── common/
│   └── setup/             # Bootstrap helpers (env connecting, etc.)
├── config/                # Configuration schemas
├── migrations/            # TypeORM migration files
└── modules/               # Feature modules
```