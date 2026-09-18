import { motion } from "motion/react";

type PlainResponse = {
    text: string;
    delay: number;
};

const PlainResponse = ({ text, delay }: PlainResponse) => {
    return (
        <motion.div className="glow-green" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay } }}>
            {text}
        </motion.div>
    );
};

export default PlainResponse;
