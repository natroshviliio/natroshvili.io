import { motion } from "motion/react";
import { infiniteEase } from "../../lib/motion";

export function HexGrid() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <motion.svg width="100%" height="100%" animate={{ opacity: [0.04, 0.09, 0.04] }} transition={infiniteEase(10)}>
                <defs>
                    <pattern id="hexpat" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                        <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#00f5ff" strokeWidth="0.8" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexpat)" />
            </motion.svg>
        </div>
    );
}
