import { motion } from "motion/react";
import { ContactForm } from "../components/contact/ContactForm";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CONTACT_CHANNELS } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative grid-bg">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    comment="// INIT_CONTACT"
                    commentColor="#00f5ff66"
                    prefix="CON"
                    accent="TACT"
                    accentColor="#00f5ff"
                    glowClass="glow-cyan"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
                        <motion.p className="text-base leading-relaxed mb-8" style={{ color: "#7aaccc" }} variants={fadeUp}>
                            Open to full-stack roles and interesting freelance contracts. Response time: &lt;24h.
                        </motion.p>

                        <div className="flex flex-col gap-4">
                            {CONTACT_CHANNELS.map((channel) => (
                                <motion.div key={channel.label} className="flex items-center gap-4" variants={fadeUp} whileHover={{ x: 4 }}>
                                    <div
                                        className="font-mono text-xs px-2 py-1 rounded w-24 text-center"
                                        style={{ background: `${channel.hex}11`, border: `1px solid ${channel.hex}33`, color: channel.hex }}>
                                        {channel.label}
                                    </div>
                                    <span className="font-mono text-sm" style={{ color: "#b0d0e8" }}>
                                        {channel.value}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5 }}>
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
