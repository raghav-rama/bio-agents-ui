# BioAgents Dashboard

A modern dashboard for visualizing and managing deployed AI Agents, built with Next.js and Tailwind CSS.

## Features

- 📊 Dashboard with statistics and visualizations
- 👤 User authentication and role-based access control
- 🤖 Agent management interface
- 📈 Analytics for monitoring agent performance
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/bioagents-dashboard.git
   cd bioagents-dashboard
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Configure environment variables

   ```bash
   cp .env.local.example .env.local
   ```

4. Start the development server

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication

The dashboard includes a demo authentication system with the following users:

- **Admin User**

  - Email: `admin@example.com`
  - Password: `password123`
  - Role: `admin`

- **Regular User**
  - Email: `emma@example.com`
  - Password: `password123`
  - Role: `user`

In a production environment, you should replace the mock authentication with a more secure solution.

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js
- **Charts**: Recharts
- **UI Components**: Headless UI
- **Icons**: Heroicons

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/src/data` - Mock data for demonstration
- `/src/providers` - Context providers (auth, etc.)
- `/src/utils` - Utility functions

## License

This project is licensed under the MIT License - see the LICENSE file for details.
