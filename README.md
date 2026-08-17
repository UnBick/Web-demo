# UnBick - Transformative Educational Technology Solutions

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
</div>

<br />

The official website for **UnBick**, showcasing our innovative, cutting-edge solutions in educational technology. This platform serves as a central hub to demonstrate our products, core vision, and connect with institutions looking to transform their educational infrastructure.

Built with modern web technologies, the site ensures a fast, interactive, and visually stunning user experience featuring 3D elements and smooth animations.

---

## 🌟 Key Features

Based on the core component architecture, the website offers:

- **Immersive Hero Experience**: A striking landing section (`HeroSection`) that grabs attention immediately.
- **Interactive 3D Graphics**: Utilizes Three.js and React Three Fiber (`BoyAnimation`, `SchoolModel`) for engaging visual storytelling directly in the browser.
- **Comprehensive Product Details**: Deep dives into our educational solutions (`ProductDetails`, `FeatureShowcase`, `Services`).
- **Interactive Demos**: Users can request or interact with demos directly on the platform (`DemoForm`, `DashboardDemo`).
- **Smooth Animations**: Powered by Framer Motion to provide fluid page transitions and scroll-based micro-interactions.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing utilizing Tailwind CSS.
- **Seamless Communication**: Integrated contact forms handled securely via Web3Forms (`Contact`).

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | [React 18](https://reactjs.org/) | Component-based UI development |
| **Build Tool** | [Vite 4](https://vitejs.dev/) | Lightning fast HMR and optimized production builds |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS framework for rapid styling |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Declarative animations and gestures for React |
| **3D Rendering** | [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/) | React ecosystem for 3D web graphics |
| **Routing** | [React Router DOM](https://reactrouter.com/) | Client-side routing for single-page applications |
| **Forms** | [Web3Forms](https://web3forms.com/) | Serverless form endpoints |

---

## 📂 Project Structure

```text
├── public/                 # Static assets (images, 3D models, _redirects)
├── src/
│   ├── components/         # Reusable React components (UI, 3D models, Sections)
│   │   ├── HeroSection.jsx
│   │   ├── DemoForm.jsx
│   │   ├── BoyAnimation.jsx # 3D Model integrations
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global CSS and Tailwind directives
│   ├── App.jsx             # Main application component & routing
│   ├── main.jsx            # React entry point
│   └── ...
├── .env                    # Environment variables (e.g., Form API keys)
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite bundler configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- `npm` or `yarn` package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/unbick-website.git
   cd unbick-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root of the project to store your sensitive keys.
   ```bash
   # Example .env file
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will boot up and be accessible at `http://localhost:5173`.

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the application for production, bundling React, resolving Tailwind classes, and placing the output in the `dist` folder. It also copies routing `_redirects` for hosting providers.
- `npm run serve`: Boots up a local static web server that serves the files from the `dist` folder to preview the production build locally.
- `npm run clean`: A utility script to remove the `dist` directory (using `rimraf`).

---

## 🌐 Deployment

This project is optimized for deployment on modern static hosting platforms. 

**Netlify Deployment**
The project includes a `netlify.toml` file and a `public/_redirects` file, making it ready for instant deployment on [Netlify](https://www.netlify.com/). Netlify will automatically handle the build process and client-side routing.

**Manual Build**
To build the project for any other hosting provider (like Vercel, AWS S3, or GitHub Pages):
```bash
npm run build
```
Upload the contents of the generated `dist/` directory to your web host.

---

## 📄 License

This project is proprietary. All rights reserved by UnBick.
