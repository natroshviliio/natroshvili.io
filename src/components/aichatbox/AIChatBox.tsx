import { motion } from "motion/react";
import HideIP from "./HideIP";
import PlainResponse from "./PlainResponse";
import { useState } from "react";

const AIChatBox = () => {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);
    const [chatBoxFirstOpen, setChatBoxFirstOpen] = useState(false);
    const toggleChatBox = () => {
        setChatBoxOpen(!chatBoxOpen);
        if (!chatBoxFirstOpen) setChatBoxFirstOpen(true);
    };

    return (
        <div
            className={`
            fixed flex flex-col ${chatBoxOpen ? "top-0 left-0 w-full h-full xl:h-170 xl:w-1/3" : "h-17 w-45 xl:h-17 xl:w-60 rounded-2xl"} shadow-[0_0_20px_-5px]
            shadow-accent-tertiary xl:top-auto xl:left-auto right-10 bottom-10 bg-[#0f001b]
            xl:rounded-xl z-999 border border-purple-950
            overflow-hidden transition-all duration-200
        `}>
            <div className="p-5 font-mono text-sm xl:text-lg flex justify-between items-center select-none">
                <span>AI Assistant</span>
                <span className={`text-xl ${chatBoxOpen ? "rotate-90" : "-rotate-90"} cursor-pointer`} onClick={toggleChatBox}>
                    ▶
                </span>
            </div>
            {chatBoxFirstOpen && (
                <div className="flex flex-col gap-2 flex-2 overflow-y-auto px-10 py-5 font-mono text-electric-green">
                    <PlainResponse text="// initializing chatbox..." delay={0} />
                    <HideIP start="// connecting to [148.200." middle="▇" end=".182]" delay={0.5} />
                    <HideIP start="// connecting to [225.27." middle="▇" end=".110]" delay={1} />
                    <HideIP start="// waiting response from [148.200." middle="▇" end=".182]" delay={1.5} />
                    <PlainResponse text="// response status [OK]" delay={2} />
                    <PlainResponse text="// establishing connection..." delay={2.5} />
                    <PlainResponse text="// connection successful!" delay={3.5} />
                    <PlainResponse text="// The assistant is ready to respond to you, ask something about [Ioane Natroshvili]" delay={4} />
                </div>
            )}
            <div className="px-10 py-5 font-mono text-electric-green border-0 border-t border-purple-950 shadow-[0_-1px_5px_-2px] shadow-accent-tertiary">
                <motion.div className="flex text-nowrap gap-4 glow-green">
                    <span>user_prompt:</span>
                    <input type="text" className="outline-none w-full" />
                </motion.div>
            </div>
        </div>
    );
};

export default AIChatBox;
