import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HeroAvatar } from "../components/hero/HeroAvatar";
import { HERO_PHRASES, STATS } from "../data/content";
import { fadeUp, infiniteEase, stagger } from "../lib/motion";

export function Hero() {
    const [typed, setTyped] = useState("");
    const [phraseIdx, setPhraseIdx] = useState(0);

    useEffect(() => {
        let i = 0;
        const phrase = HERO_PHRASES[phraseIdx];
        const interval = setInterval(() => {
            setTyped(phrase.slice(0, i + 1));
            i++;
            if (i >= phrase.length) {
                clearInterval(interval);
                setTimeout(() => {
                    let j = phrase.length;
                    const erase = setInterval(() => {
                        setTyped(phrase.slice(0, j - 1));
                        j--;
                        if (j <= 0) {
                            clearInterval(erase);
                            setPhraseIdx((prev) => (prev + 1) % HERO_PHRASES.length);
                        }
                    }, 40);
                }, 1800);
            }
        }, 70);
        return () => clearInterval(interval);
    }, [phraseIdx]);

    return (
        <section id="about" className="relative h-screen flex items-center grid-bg" style={{ paddingTop: "80px" }}>
            <div className="max-w-7xl mx-auto px-6 w-full py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div className="flex flex-col" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div className="font-mono text-xs tracking-widest mb-4" style={{ color: "#00f5ff88" }} variants={fadeUp}>
                            // INITIALIZING PORTFOLIO.SYS
                        </motion.div>
                        <motion.h1
                            className="font-display text-5xl lg:text-7xl font-black mb-2 leading-none"
                            style={{ color: "#d8eaf5" }}
                            variants={fadeUp}>
                            IOANE
                        </motion.h1>
                        <motion.h1
                            className="font-display text-5xl lg:text-7xl font-black mb-6 leading-none glow-cyan"
                            style={{ color: "#00f5ff" }}
                            variants={fadeUp}>
                            NATROSHVILI
                        </motion.h1>
                        <motion.div className="flex items-center gap-2 mb-8" variants={fadeUp}>
                            <span className="font-mono text-lg" style={{ color: "#7aaccc" }}>
                                {">"} Specializing in{" "}
                            </span>
                            <span className="font-mono text-lg glow-green" style={{ color: "#00ff88" }}>
                                {typed}
                            </span>
                            <motion.span
                                className="font-mono text-lg"
                                style={{ color: "#00ff88" }}
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1], ease: "linear" }}>
                                _
                            </motion.span>
                        </motion.div>
                        <motion.p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "#7aaccc" }} variants={fadeUp}>
                            A Full-Stack Engineer with 6+ years of experience working on large-scale projects. Extensive expertise across web
                            technologies, data, and cloud systems, combined with excellent visualization skills and strong analytical thinking.
                            Capable of identifying and eliminating complex and potentially critical risks.
                        </motion.p>
                        <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
                            <motion.a
                                href="#projects"
                                className="btn-primary px-6 py-3 font-mono text-sm tracking-widest uppercase rounded"
                                whileHover={{ scale: 1.04, boxShadow: "0 0 20px #00f5ff44" }}
                                whileTap={{ scale: 0.97 }}>
                                ABOUT_PROJECTS
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="px-6 py-3 font-mono text-sm tracking-widest uppercase rounded border"
                                style={{ borderColor: "#1e3448", color: "#7aaccc" }}
                                whileHover={{ borderColor: "#00ff8866", color: "#00ff88" }}
                                whileTap={{ scale: 0.97 }}>
                                HIRE_ME
                            </motion.a>
                        </motion.div>
                        <motion.div className="flex gap-6 mt-10" variants={fadeUp}>
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <div className="font-display text-2xl font-bold glow-cyan" style={{ color: "#00f5ff" }}>
                                        {stat.value}
                                    </div>
                                    <div className="font-mono text-xs tracking-widest" style={{ color: "#4a7090" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <HeroAvatar />
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0], opacity: [0.45, 1, 0.45] }}
                transition={infiniteEase(1.8)}>
                <div className="font-mono text-xs tracking-widest" style={{ color: "#4a7090" }}>
                    SCROLL
                </div>
                <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, #00f5ff)" }} />
            </motion.div>
        </section>
    );
}
