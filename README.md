# CW20 Token Info Search

## Tech Stack

**General**
- [`turborepo`](https://turbo.build/): monorepo build tool
- [`pnpm`](https://pnpm.io/): package manager

**Frontend**
-   [`solidjs`](https://www.solidjs.com/): framework
-   [`vite`](https://vitejs.dev/): dev server and build tool
-   [`tailwindcss`](https://tailwindcss.com/): css framework
-  [`typescript`](https://www.typescriptlang.org/): language

**Backend**
-   [`nestjs`](https://nestjs.com/): nodejs framework
-  [`typescript`](https://www.typescriptlang.org/): language
  
## Running

### Setup

```bash
# clone this repository
git clone git@github.com:xianlinc/entry_task.git
# change directory to the 'entry_task' directory
cd entry_task
# install dependencies with package manager
pnpm install
```

### Application server (Dev)

```bash
# from 'entry_task' directory, cd into app folder
cd apps/app
# start application server and watch for file changes
pnpm run start:dev
```

### Web

```bash
# from 'entry_task' directory, cd into web folder
cd apps/web
# start frontend client with hot reload
pnpm dev
```

## Folder Structure

**root directory structure**
```
.
├── apps/
│   ├── app
│   └── web
└── packages
```

**app directory structure**
```
.
├── public
└── src/
    ├── components
    └── routes
```

**web directory structure**
```
.
├── dto
├── src
└── test
```
