import { motion } from "motion/react";

type HideIP = {
    start: string;
    middle: string;
    end: string;
    delay: number;
};

const HideIP = ({ start, middle, end, delay }: HideIP) => {
    return (
        <motion.div className="flex flex-wrap glow-green" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay } }}>
            <span>{start}</span>
            <span className="-mt-0.5 flex">
                <span>{middle}</span>
                <span className="-ml-1">{middle}</span>
            </span>
            <span>{end}</span>
        </motion.div>
    );
};

export default HideIP;
