# Project Description

This project is a full-stack web application starter built with a React + Vite frontend and a Node.js + Express backend.
It includes reusable UI components, multi-page routing, and sample API modules for user and contact features.
The codebase is organized to keep frontend, backend, styling, and documentation concerns separated for easier development and maintenance.

## Tech Stack

- Frontend: React, React Router, Vite
- UI and Styling: Tailwind CSS, Radix UI, MUI (Material UI), Emotion
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication and Security: JWT (`jsonwebtoken`), password hashing (`bcryptjs`)
- API and Server Utilities: CORS, dotenv

## Top-Level Folder Overview

- `src/`: Frontend application source code (pages, components, routes, and styles).
- `server/`: Backend API source code (server entry, routes, controllers, and data models).
- `guidelines/`: Project guidelines and reference documentation.
- Root files (`package.json`, `vite.config.ts`, `postcss.config.mjs`, etc.): Build, tooling, and project configuration.

## Project Structure

```text
.
|-- guidelines/
|   `-- Guidelines.md
|-- server/
|   |-- controllers/
|   |   |-- contactController.js
|   |   `-- userController.js
|   |-- models/
|   |   |-- Contact.js
|   |   `-- User.js
|   |-- routes/
|   |   |-- contactRoutes.js
|   |   `-- userRoutes.js
|   `-- server.js
|-- src/
|   |-- app/
|   |   |-- components/
|   |   |   |-- figma/
|   |   |   |   `-- ImageWithFallback.tsx
|   |   |   |-- ui/
|   |   |   |   |-- accordion.tsx
|   |   |   |   |-- alert.tsx
|   |   |   |   |-- alert-dialog.tsx
|   |   |   |   |-- aspect-ratio.tsx
|   |   |   |   |-- avatar.tsx
|   |   |   |   |-- badge.tsx
|   |   |   |   |-- breadcrumb.tsx
|   |   |   |   |-- button.tsx
|   |   |   |   |-- calendar.tsx
|   |   |   |   |-- card.tsx
|   |   |   |   |-- carousel.tsx
|   |   |   |   |-- chart.tsx
|   |   |   |   |-- checkbox.tsx
|   |   |   |   |-- collapsible.tsx
|   |   |   |   |-- command.tsx
|   |   |   |   |-- context-menu.tsx
|   |   |   |   |-- dialog.tsx
|   |   |   |   |-- drawer.tsx
|   |   |   |   |-- dropdown-menu.tsx
|   |   |   |   |-- form.tsx
|   |   |   |   |-- hover-card.tsx
|   |   |   |   |-- input.tsx
|   |   |   |   |-- input-otp.tsx
|   |   |   |   |-- label.tsx
|   |   |   |   |-- menubar.tsx
|   |   |   |   |-- navigation-menu.tsx
|   |   |   |   |-- pagination.tsx
|   |   |   |   |-- popover.tsx
|   |   |   |   |-- progress.tsx
|   |   |   |   |-- radio-group.tsx
|   |   |   |   |-- resizable.tsx
|   |   |   |   |-- scroll-area.tsx
|   |   |   |   |-- select.tsx
|   |   |   |   |-- separator.tsx
|   |   |   |   |-- sheet.tsx
|   |   |   |   |-- sidebar.tsx
|   |   |   |   |-- skeleton.tsx
|   |   |   |   |-- slider.tsx
|   |   |   |   |-- sonner.tsx
|   |   |   |   |-- switch.tsx
|   |   |   |   |-- table.tsx
|   |   |   |   |-- tabs.tsx
|   |   |   |   |-- textarea.tsx
|   |   |   |   |-- toggle.tsx
|   |   |   |   |-- toggle-group.tsx
|   |   |   |   |-- tooltip.tsx
|   |   |   |   |-- use-mobile.ts
|   |   |   |   `-- utils.ts
|   |   |   |-- Footer.tsx
|   |   |   `-- Header.tsx
|   |   |-- pages/
|   |   |   |-- About.tsx
|   |   |   |-- Contact.tsx
|   |   |   |-- Features.tsx
|   |   |   |-- Home.tsx
|   |   |   |-- NotFound.tsx
|   |   |   `-- Pricing.tsx
|   |   |-- App.tsx
|   |   |-- Root.tsx
|   |   `-- routes.tsx
|   |-- styles/
|   |   |-- fonts.css
|   |   |-- index.css
|   |   |-- tailwind.css
|   |   `-- theme.css
|   `-- main.tsx
|-- ATTRIBUTIONS.md
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- README.md
`-- vite.config.ts
```

## Running the Code

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

## Author

Aldrian Loberiano

## License

If you want to contribute, feel free to fork this repository, create a feature branch, and submit a pull request.
