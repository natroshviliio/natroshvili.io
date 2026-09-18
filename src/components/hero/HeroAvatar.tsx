import { motion } from "motion/react";
import { HERO_HEX_BADGES, ORBIT_COLORS } from "../../data/content";
import { infiniteEase, infiniteLinear } from "../../lib/motion";

export function HeroAvatar() {
    return (
        <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative w-72 h-72">
                <motion.div
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: "#00f5ff22", borderTopColor: "#00f5ff", borderWidth: 1 }}
                    animate={{ rotate: 360 }}
                    transition={infiniteLinear(20)}
                />
                <motion.div
                    className="absolute inset-4 rounded-full border"
                    style={{ borderColor: "#00ff8822", borderBottomColor: "#00ff88", borderWidth: 1 }}
                    animate={{ rotate: -360 }}
                    transition={infiniteLinear(14)}
                />
                <motion.div
                    className="absolute inset-8 rounded-full border"
                    style={{ borderColor: "#8b00ff22", borderRightColor: "#8b00ff", borderWidth: 1 }}
                    animate={{ rotate: 360 }}
                    transition={infiniteLinear(10)}
                />
                <motion.div
                    className="absolute inset-12 rounded-full flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, #0d1e2e, #112233)",
                        border: "1px solid #00f5ff44",
                    }}
                    animate={{
                        boxShadow: [
                            "0 0 0 1px #00f5ff33, 0 0 12px #00f5ff22",
                            "0 0 0 1px #00f5ff66, 0 0 28px #00f5ff44",
                            "0 0 0 1px #00f5ff33, 0 0 12px #00f5ff22",
                        ],
                    }}
                    transition={infiniteEase(2.4)}>
                    <span className="font-display text-5xl font-black glow-cyan" style={{ color: "#00f5ff" }}>
                        IN
                    </span>
                </motion.div>
                <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={infiniteLinear(24)}>
                    {[0, 90, 180, 270].map((deg, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                background: ORBIT_COLORS[i],
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${deg}deg) translateX(132px) translateY(-50%)`,
                                boxShadow: `0 0 8px ${ORBIT_COLORS[i]}`,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {HERO_HEX_BADGES.map((badge, index) => (
                <motion.div
                    key={badge.label}
                    className="absolute font-mono text-xs px-2 py-1 rounded"
                    style={{
                        top: badge.top,
                        right: badge.right,
                        bottom: badge.bottom,
                        left: badge.left,
                        color: badge.color,
                        background: `${badge.color}11`,
                        border: `1px solid ${badge.color}44`,
                    }}
                    animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.05, 1] }}
                    transition={{ ...infiniteEase(3), delay: index * 0.4 }}>
                    {badge.label}
                </motion.div>
            ))}
        </motion.div>
    );
}
