import { motion } from "motion/react";
import { LANGUAGES } from "../../data/content";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export function LanguageGrid() {
    return (
        <motion.div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
            {LANGUAGES.map((language) => (
                <motion.div key={language.lang} className="card-cyber p-4 rounded-lg flex items-center gap-3" variants={fadeUp} whileHover={{ y: -3, borderColor: `${language.hex}66` }}>
                    <div
                        className="w-10 h-10 rounded flex items-center justify-center font-mono font-bold text-xs flex-shrink-0"
                        style={{ background: `${language.hex}22`, border: `1px solid ${language.hex}44`, color: language.hex }}>
                        {language.icon}
                    </div>
                    <span className="font-mono text-xs" style={{ color: "#7aaccc" }}>
                        {language.lang}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}
