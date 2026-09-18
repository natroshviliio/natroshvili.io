import { motion, useScroll, useTransform } from "motion/react";
import { NAV_LINKS } from "../../data/content";

type NavProps = {
    active: string;
};

export function Nav({ active }: NavProps) {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(scrollY, [0, 40], ["rgba(5,10,15,0)", "rgba(5,10,15,0.95)"]);
    const backdropFilter = useTransform(scrollY, [0, 40], ["blur(0px)", "blur(12px)"]);
    const borderColor = useTransform(scrollY, [0, 40], ["rgba(0,245,255,0)", "rgba(0,245,255,0.1)"]);

    return (
        <motion.nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor, backdropFilter, borderBottom: "1px solid", borderColor }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="font-display text-sm font-bold tracking-widest glow-cyan" style={{ color: "#00f5ff" }}>
                    &lt;DEV.PORTFOLIO/&gt;
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = active === link.toLowerCase();
                        return (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="relative font-mono text-xs tracking-widest uppercase"
                                initial="rest"
                                animate={isActive ? "active" : "rest"}
                                whileHover="hover"
                                variants={{
                                    rest: { color: "#7aaccc" },
                                    hover: { color: "#00f5ff" },
                                    active: { color: "#00f5ff" },
                                }}
                                transition={{ duration: 0.2 }}>
                                {link}
                                <motion.span
                                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left"
                                    style={{ background: "#00f5ff", boxShadow: "0 0 6px #00f5ff" }}
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                        active: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.25 }}
                                />
                            </motion.a>
                        );
                    })}
                </div>
                <div className="font-mono text-xs" style={{ color: "#4a7090" }}>
                    v2.0.26
                </div>
            </div>
        </motion.nav>
    );
}
