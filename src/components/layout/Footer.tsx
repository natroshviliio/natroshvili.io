import { motion } from "motion/react";

export function Footer() {
    return (
        <footer className="py-8 border-t" style={{ borderColor: "#0a1520" }}>
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs" style={{ color: "#2a4560" }}>
                    © 2026 IOANE NATROSHVILI :: ALL RIGHTS RESERVED
                </div>
                <div className="font-mono text-xs" style={{ color: "#2a4560" }}>
                    BUILT_WITH: React + TypeScript + Vite :: v2.0.26
                </div>
                <div className="font-mono text-xs flex items-center gap-2" style={{ color: "#2a4560" }}>
                    STATUS:{" "}
                    <span className="inline-flex items-center gap-1.5" style={{ color: "#00ff88" }}>
                        <motion.span
                            className="inline-block w-1.5 h-1.5 rounded-full"
                            style={{ background: "#00ff88" }}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.6, repeat: Infinity }}
                        />
                        ONLINE
                    </span>
                </div>
            </div>
        </footer>
    );
}
