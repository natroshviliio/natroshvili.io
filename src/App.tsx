import { MotionConfig } from "motion/react";
import { HexGrid } from "./components/effects/HexGrid";
import { ScanLine } from "./components/effects/ScanLine";
import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { useActiveSection } from "./hooks/useActiveSection";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export default function App() {
    const activeSection = useActiveSection("about");

    return (
        <MotionConfig reducedMotion="user">
            <div className="relative min-h-screen" style={{ background: "#050a0f" }}>
                <HexGrid />
                <ScanLine />
                <Nav active={activeSection} />
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </MotionConfig>
    );
}
