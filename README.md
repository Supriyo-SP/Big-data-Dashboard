<div align="center">
  <h1>🚀 Big Data Educational Dashboard</h1>
  <p>An interactive, frontend-focused web dashboard to visualize and explain core big data concepts for students.</p>
</div>

<br />

## 🌟 About the Project

The **Big Data Educational Dashboard** is designed to demystify complex big data ecosystems like **Hadoop**, **Spark**, and **Kafka**. Built with a clean, modern frontend stack, this application leverages interactive visualizations and mock data pipelines to provide an intuitive learning experience. It serves as an excellent tool for academic presentations and demonstrations without the need for complex backend infrastructure.

## ✨ Features

- **Interactive Visualizations:** Beautiful charts and graphs powered by Recharts to illustrate data trends and comparisons.
- **Concept Deep Dives:** Clear, accessible explanations of Hadoop, Spark, and Kafka and how they interoperate in modern data architectures.
- **Data Pipeline Simulations:** Visual representations of data flowing through the big data ecosystem.
- **Responsive Design:** Fully responsive layout built with Tailwind CSS, ensuring a great experience on any device.
- **Modern UI/UX:** Sleek, user-friendly interface with consistent theming and micro-interactions.

## 🛠️ Tech Stack

This project is built using modern web development tools:

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Charts/Graphs:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js installed on your machine. You will need:
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or download the project files.
2. **Navigate to the project directory:**
   ```bash
   cd Dashboard
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to view the application.

## 🗂️ Project Structure

```text
Dashboard/
├── docs/               # Project documentation and presentation slides
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main application views/pages
│   ├── App.jsx         # Root layout and routing logic
│   ├── index.css       # Global styles (Tailwind configuration)
│   └── main.jsx        # Application entry point
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite configuration
```

## 🏗️ Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

The compiled files will be located in the `dist` directory, ready to be deployed to any static hosting service (like Vercel, Netlify, or GitHub Pages).

To preview the production build locally:

```bash
npm run preview
```

## 📄 License

This project is available for educational purposes. Feel free to use and modify it for your academic needs.
