import { motion } from "motion/react";
import { ExperienceCard } from "../components/experience/ExperienceCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { EXPERIENCE } from "../data/content";
import { stagger, viewportOnce } from "../lib/motion";

export function Experience() {
    return (
        <section id="experience" className="py-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    comment="// WORK_HISTORY"
                    commentColor="#8b00ff88"
                    prefix="EXP"
                    accent="ERIENCE"
                    accentColor="#8b00ff"
                    glowClass="glow-purple"
                />

                <div className="relative">
                    <motion.div
                        className="absolute left-6 top-0 bottom-0 w-px origin-top"
                        style={{ background: "linear-gradient(to bottom, #00f5ff44, #8b00ff44, transparent)" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <motion.div className="flex flex-col gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
                        {EXPERIENCE.map((item) => (
                            <ExperienceCard key={`${item.company}-${item.period}`} experience={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
