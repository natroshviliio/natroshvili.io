import { motion } from "motion/react";
import type { Skill } from "../../types/portfolio";

type SkillCardProps = {
    skill: Skill;
    index: number;
};

export function SkillCard({ skill, index }: SkillCardProps) {
    return (
        <motion.div className="card-cyber p-5 rounded-lg" whileHover={{ y: -3, borderColor: `${skill.hex}66` }}>
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: skill.hex }}
                        animate={{ boxShadow: [`0 0 4px ${skill.hex}`, `0 0 12px ${skill.hex}`, `0 0 4px ${skill.hex}`] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.1 }}
                    />
                    <span className="font-mono text-sm font-medium" style={{ color: "#b0d0e8" }}>
                        {skill.name}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs" style={{ color: "#4a7090" }}>
                        {skill.category}
                    </span>
                    <span className="font-mono text-sm font-bold" style={{ color: skill.hex }}>
                        {skill.level}%
                    </span>
                </div>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "#1e3448" }}>
                <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.2, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                        background: `linear-gradient(90deg, ${skill.hex}88, ${skill.hex})`,
                        boxShadow: `0 0 8px ${skill.hex}88`,
                    }}
                />
            </div>
        </motion.div>
    );
}
