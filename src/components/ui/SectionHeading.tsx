import { motion } from "motion/react";

type SectionHeadingProps = {
    comment: string;
    commentColor: string;
    prefix: string;
    accent: string;
    accentColor: string;
    glowClass: string;
};

export function SectionHeading({ comment, commentColor, prefix, accent, accentColor, glowClass }: SectionHeadingProps) {
    return (
        <motion.div className="mb-12" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
            <div className="font-mono text-xs tracking-widest mb-2" style={{ color: commentColor }}>
                {comment}
            </div>
            <h2 className="font-display text-4xl font-bold" style={{ color: "#d8eaf5" }}>
                {prefix}
                <span className={glowClass} style={{ color: accentColor }}>
                    {accent}
                </span>
            </h2>
        </motion.div>
    );
}
