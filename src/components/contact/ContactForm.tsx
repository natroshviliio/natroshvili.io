import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type ContactFormState = {
    name: string;
    email: string;
    message: string;
};

const EMPTY_FORM: ContactFormState = { name: "", email: "", message: "" };

const fieldStyle = {
    background: "#050a0f",
    border: "1px solid #1e3448",
    color: "#b0d0e8",
};

export function ContactForm() {
    const [form, setForm] = useState<ContactFormState>(EMPTY_FORM);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm(EMPTY_FORM);
    };

    return (
        <div className="card-cyber rounded-xl p-6">
            <div className="font-mono text-xs mb-6" style={{ color: "#00f5ff66" }}>
                {">"} COMPOSE_MESSAGE.exe
            </div>

            <AnimatePresence mode="wait">
                {sent ? (
                    <motion.div
                        key="ack"
                        className="flex items-center gap-3 py-8 justify-center rounded-lg"
                        style={{ background: "#00ff8811", border: "1px solid #00ff8844" }}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.28 }}>
                        <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{ background: "#00ff88" }}
                            animate={{ boxShadow: ["0 0 6px #00ff88", "0 0 16px #00ff88", "0 0 6px #00ff88"] }}
                            transition={{ duration: 1.4, repeat: Infinity }}
                        />
                        <span className="font-mono text-sm glow-green" style={{ color: "#00ff88" }}>
                            MESSAGE_SENT :: ACK
                        </span>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}>
                        {[
                            { key: "name" as const, label: "NAME", type: "text", placeholder: "John Doe" },
                            { key: "email" as const, label: "EMAIL", type: "email", placeholder: "john@company.com" },
                        ].map((field) => (
                            <div key={field.key}>
                                <label className="font-mono text-xs block mb-1.5" style={{ color: "#4a7090" }}>
                                    {field.label}
                                </label>
                                <motion.input
                                    type={field.type}
                                    required
                                    value={form[field.key]}
                                    onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-3 rounded font-mono text-sm outline-none"
                                    style={fieldStyle}
                                    whileFocus={{ borderColor: "#00f5ff66" }}
                                />
                            </div>
                        ))}
                        <div>
                            <label className="font-mono text-xs block mb-1.5" style={{ color: "#4a7090" }}>
                                MESSAGE
                            </label>
                            <motion.textarea
                                required
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded font-mono text-sm outline-none resize-none"
                                style={fieldStyle}
                                whileFocus={{ borderColor: "#00f5ff66" }}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="btn-primary px-6 py-3 font-mono text-sm tracking-widest uppercase rounded mt-2"
                            whileHover={{ scale: 1.03, boxShadow: "0 0 20px #00f5ff44" }}
                            whileTap={{ scale: 0.97 }}>
                            SEND_MESSAGE →
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
