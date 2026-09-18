import { motion } from "motion/react";
import type { Project } from "../../types/portfolio";
import { fadeUp } from "../../lib/motion";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            className="card-cyber rounded-xl overflow-hidden cursor-default"
            variants={fadeUp}
            whileHover={{
                y: -6,
                borderColor: `${project.hex}66`,
                boxShadow: `0 0 32px ${project.hex}18, 0 8px 32px #00000088`,
            }}
            transition={{ duration: 0.28 }}>
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${project.hex}, transparent)` }} />
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span
                                className="font-mono text-xs px-2 py-0.5 rounded"
                                style={{
                                    background: `${project.hex}18`,
                                    border: `1px solid ${project.hex}44`,
                                    color: project.hex,
                                }}>
                                {project.status}
                            </span>
                        </div>
                        <h3 className="font-display text-lg font-bold mt-2" style={{ color: "#d8eaf5" }}>
                            {project.title}
                        </h3>
                    </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#7aaccc" }}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <motion.span key={tech} className="tag-tech px-2 py-1 rounded" whileHover={{ scale: 1.06, borderColor: "#00f5ff88" }}>
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
