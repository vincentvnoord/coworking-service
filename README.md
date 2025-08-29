# WorkMosaic (Coworking Service Demo)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![Postgres](https://img.shields.io/badge/Postgres-17-blue?logo=postgresql)
![DrizzleORM](https://img.shields.io/badge/ORM-Drizzle-orange)

WorkMosaic is a sample website for a company that serves coworking spaces throughout the world. This is usually in the form of an office, hot desk, dedicated desk or a bigger meetup space for events for example. Built with Next.js, it is optimized for SEO and fast load times, with the added benefit of quick hydration for client side interaction.

## Table of Contents
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the app](#running-the-app)
  - [Environment Variables](#environment-variables)
  - [Running the database](#running-the-database)
  - [Available Scripts](#available-scripts)

## Key Features
* UI/UX design optimized by a student designer.
* Location input with suggestions via Google Places API.
* Search form with workspace type select which leads to the search page.
* Filtered search based on location, workspace and more.

<img width="1657" height="984" alt="image" src="https://github.com/user-attachments/assets/d9b07f9e-3c8a-4a61-a47d-f34c881e292e" />

## Getting Started
### Prerequisites
Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v22+**
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) database

👉 If you prefer Docker, this project includes a `docker-compose.yml` file to spin up PostgreSQL automatically.

### Installation
```bash
git clone https://github.com/vincentvnoord/coworking-service.git
cd coworking-service
npm install
```

### Running the app
It is a Next.js project, so to run it you do:
```bash
npm run dev
```

### Environment Variables
Create a `.env` file in the root of the project based on `.env.example`.  

Required variables:
- `DATABASE_URL` – Connection string for PostgreSQL  
- `GOOGLE_PLACES_API_KEY` – Your Google Places API key  

Example:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/workmosaic
GOOGLE_PLACES_API_KEY=your_api_key_here
```

If using the dockercompose.yml for the database include:
```env
DB_USERNAME=root
DB_PASSWORD=rootpass
DB_NAME=workmosaic_db
```
The Postgres database will use these credentials

### Running the database
- To run the app without problems, you need to have a Postgres database ready (locally or on a server if preferred). The project includes a docker compose for running one locally.
- The project uses Drizzle ORM and has generate and migrate scripts in the package.json.
To get the correct data model, run:
```bash
npm run migrate
```

### Available Scripts
- `npm run dev` – Start the Next.js development server  
- `npm run build` – Build the app for production  
- `npm run start` – Run the production build  
- `npm run migrate` – Run database migrations (Drizzle ORM)  
- `npm run generate` – Generate Drizzle schema  
- `npm run seed` – Seed the database with initial data  
