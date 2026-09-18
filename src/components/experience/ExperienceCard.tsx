import { motion } from "motion/react";
import type { ExperienceItem as ExperienceItemType } from "../../types/portfolio";
import { fadeUp } from "../../lib/motion";

type ExperienceCardProps = {
    experience: ExperienceItemType;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <motion.div className="relative pl-16" variants={fadeUp}>
            <motion.div
                className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{
                    borderColor: experience.hex,
                    background: "#050a0f",
                }}
                animate={{ boxShadow: [`0 0 8px ${experience.hex}66`, `0 0 18px ${experience.hex}`, `0 0 8px ${experience.hex}66`] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: experience.hex }} />
            </motion.div>

            <motion.div className="card-cyber rounded-xl p-6" whileHover={{ y: -4, borderColor: `${experience.hex}55` }}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                        <h3 className="font-display text-base font-bold" style={{ color: "#d8eaf5" }}>
                            {experience.role}
                        </h3>
                        <div className="font-mono text-sm mt-0.5" style={{ color: experience.hex }}>
                            {experience.company}
                        </div>
                    </div>
                    <div
                        className="font-mono text-xs px-3 py-1 rounded"
                        style={{ background: `${experience.hex}11`, border: `1px solid ${experience.hex}33`, color: experience.hex }}>
                        {experience.period}
                    </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#7aaccc" }}>
                    {experience.desc}
                </p>
            </motion.div>
        </motion.div>
    );
}
