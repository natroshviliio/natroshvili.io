import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { LanguageGrid } from "../components/skills/LanguageGrid";
import { SkillCard } from "../components/skills/SkillCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SKILLS } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export function Skills() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(SKILLS.map((skill) => skill.category)))];
    const filtered = activeCategory === "All" ? SKILLS : SKILLS.filter((skill) => skill.category === activeCategory);

    console.log(filtered);

    return (
        <section id="skills" className="py-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    comment="// TECH_STACK"
                    commentColor="#00f5ff66"
                    prefix="SKILL"
                    accent="_SET"
                    accentColor="#00f5ff"
                    glowClass="glow-cyan"
                />

                <LayoutGroup>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className="relative font-mono text-xs px-4 py-2 rounded"
                                    style={{ color: isActive ? "#00f5ff" : "#4a7090" }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}>
                                    {isActive && (
                                        <motion.span
                                            layoutId="skill-category"
                                            className="absolute inset-0 rounded"
                                            style={{ background: "#00f5ff22", border: "1px solid #00f5ff88" }}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {!isActive && (
                                        <span className="absolute inset-0 rounded" style={{ background: "#0d1e2e", border: "1px solid #1e3448" }} />
                                    )}
                                    <span className="relative z-10">{category.toUpperCase()}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </LayoutGroup>

                <motion.div className="grid md:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
                    {filtered.map((skill, index) => (
                        <motion.div key={skill.name} variants={fadeUp} layout>
                            <SkillCard skill={skill} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                <LanguageGrid />
            </div>
        </section>
    );
}
