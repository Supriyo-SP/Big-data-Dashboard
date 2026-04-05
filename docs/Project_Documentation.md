# Interactive Dashboard for Big Data Concepts 
## Complete Project Documentation

### 1. Project Overview
**Title:** Interactive Dashboard for Big Data Concepts
**Objective:** Provide an interactive, visual, and highly accessible web dashboard to help computer science students and beginners grasp the complex ecosystem of Big Data architectures and paradigms.
**Scope:** Covers 7 fundamental Big Data architecture concepts (Hadoop, HDFS, Spark, Kafka, Core Processing Paradigms, Database storage paradigms, Data Lake Architecture).

### 2. Technology Stack
* **Frontend Framework:** React 19 via Vite (for instant development server and optimized build)
* **Styling:** Tailwind CSS v4 (Utility-first CSS framework for rapid and modern UI development)
* **Routing:** React Router v7 (For seamless multi-page transitions without page reloads)
* **Visualizations/Charts:** Recharts (For simulating the data pipeline flows visually)
* **Iconography:** Lucide-React (For lightweight, clean SVG icons)
* **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)

### 3. Application Architecture & Folder Structure
The application follows a standard React structural architecture prioritizing separation of concerns:
* `src/App.jsx`: The root component mapping URLs to page components using `Routes`.
* `src/components/layout/`: Includes persistent navigation elements like the Top `Navbar`.
* `src/components/concepts/`: Includes reusable generic UI blocks like the `ConceptCard` used on the homepage.
* `src/pages/`: Contains the 4 core views (`Home`, `ConceptDetail`, `Comparison`, `Demo`).
* `src/data/concepts.json`: The mock dataset acting as a static API. Changing data here automatically reflects across the application.

### 4. Core Features

#### Feature A: Dynamic Concept Exploration (Home Page)
A responsive grid layout leveraging dynamic search algorithms (`useMemo`) to allow users to quickly filter big data concepts by typing relative keywords or selecting categories like 'Storage' or 'Streaming'.

#### Feature B: Deep Dive Views (Detail Page)
A focused layout generated dynamically from the JSON file. It maps out structured definitions, 'Pros' vs 'Cons' using color-coded metrics, and direct links to structurally relevant concepts.

#### Feature C: Architectural Comparisons
An analytical view allowing side-by-side trade-off evaluations of major big data paradigms. This helps users contextualize *when* to use what technology (e.g., When to use Hadoop/Disk-based tracking vs Spark/In-Memory processing).

#### Feature D: Interactive Flow Simulation
A stepped visual animation representing a generic Big Data Data-Flow (Ingestion -> Processing -> Storage -> Visualization). It utilizes delayed-timing hooks to trigger Recharts into providing a simulated output stream.

### 5. Hosting & Deployment Guidelines
Because the dashboard is fully client-side (frontend-only without a heavy backend database), it is extremely cheap and easy to host statically. 

**Recommended Free Host:** Vercel or Netlify.
**Deployment Steps:**
1. Upload this project folder to a GitHub Repository.
2. Sign in to Vercel.com or Netlify.com using GitHub.
3. Import the repository.
4. The host will automatically detect it is a Vite/React application and run `npm run build`.
5. It will provide a live URL within 60 seconds (e.g., `https://your-project-name.vercel.app`).
