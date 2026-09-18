import { motion } from "motion/react";
import { ProjectCard } from "../components/projects/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PROJECTS } from "../data/content";
import { stagger, viewportOnce } from "../lib/motion";

export function Projects() {
    return (
        <section id="projects" className="py-24 relative grid-bg min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    comment="// RECENT_WORK"
                    commentColor="#00ff8866"
                    prefix="PRO"
                    accent="JECTS"
                    accentColor="#00ff88"
                    glowClass="glow-green"
                />

                <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
