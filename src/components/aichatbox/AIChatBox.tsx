import { motion } from "motion/react";

const AIChatBox = () => {
    return (
        <div className="fixed flex flex-col right-10 bottom-10 w-1/3 h-170 bg-gray-950 rounded-xl z-50 border border-slate-800">
            <div className="p-5 font-mono text-lg">AI Assistant</div>
            <div className="flex flex-col gap-2 flex-2 overflow-y-auto px-10 py-5 font-mono text-electric-green">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
                    // initializing chatbox...
                </motion.div>
                <motion.div className="flex" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}>
                    <span>// connecting to [148.200.</span>
                    <span className="-mt-0.5 flex">
                        <span>▇</span>
                        <span className="-ml-1">▇</span>
                    </span>
                    <span>.182]</span>
                </motion.div>
                <motion.div className="flex" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
                    <span>// connecting to [225.27.</span>
                    <span className="-mt-0.5 flex">
                        <span>▇</span>
                        <span className="-ml-1">▇</span>
                    </span>
                    <span>.110]</span>
                </motion.div>
                <motion.div className="flex" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}>
                    <span>// waiting response from [148.200.</span>
                    <span className="-mt-0.5 flex">
                        <span>▇</span>
                        <span className="-ml-1">▇</span>
                    </span>
                    <span>.182]</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}>
                    // response status [OK]
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}>
                    // establishing connection...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 3.5 } }}>
                    // connection successful!
                </motion.div>
            </div>
            <div className="px-10 py-5 font-mono text-electric-green border-0 border-t border-slate-600">
                <motion.div className="flex text-nowrap gap-4">
                    <span>user: &#8594;</span>
                    <input type="text" className="outline-none w-full" />
                </motion.div>
            </div>
        </div>
    );
};

export default AIChatBox;
