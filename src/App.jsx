import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import Loader from "./components/Loader";

// Lazy load everything
const Header = lazy(() => import("./pages/Header"));
const Footer = lazy(() => import("./pages/Footer"));
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen bg-white transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
