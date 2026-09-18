import { motion } from "motion/react";
import { infiniteLinear } from "../../lib/motion";

export function ScanLine() {
    return (
        <motion.div
            className="fixed left-0 right-0 pointer-events-none"
            style={{
                height: 2,
                background: "linear-gradient(90deg, transparent, #00f5ff22, transparent)",
                zIndex: 1,
                top: 0,
            }}
            animate={{ y: ["-2%", "100vh"] }}
            transition={infiniteLinear(8)}
        />
    );
}
