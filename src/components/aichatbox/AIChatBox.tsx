import { motion } from "motion/react";
import HideIP from "./HideIP";
import PlainResponse from "./PlainResponse";
import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import axios from "axios";

type AiResponse = {
    status: boolean;
    content: string;
};

type Content = {
    type: string;
    content: string;
};

const AIChatBox = () => {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);
    const [chatBoxFirstOpen, setChatBoxFirstOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [content, setContent] = useState<Content[]>([]);
    const chatRef = useRef<HTMLDivElement>(null);

    const handleChangePrompt = (e: ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value);

    const toggleChatBox = () => {
        setChatBoxOpen(!chatBoxOpen);
        if (!chatBoxFirstOpen) setChatBoxFirstOpen(true);
    };

    const sendPrompt = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;

        const message = prompt.trim();
        if (!message) return;

        setPrompt("");
        setContent((content) => [...content, { type: "user", content: message }]);

        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/chat", { prompt: message });
            const data: AiResponse = await response.data;

            if (data.status) setContent((content) => [...content, { type: "assistant", content: data.content }]);
            chatRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        chatRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
        // chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight });
    }, [content]);

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
                <span className={`text-xl ${chatBoxOpen ? "rotate-90 " : "-rotate-90"} cursor-pointer`} onClick={toggleChatBox}>
                    ▶
                </span>
            </div>
            {chatBoxFirstOpen && (
                <div className="flex flex-col gap-2 flex-2 overflow-y-auto px-10 py-5 font-mono text-electric-green" ref={chatRef}>
                    <PlainResponse text="// initializing chatbox..." delay={0} />
                    <HideIP start="// connecting to [148.200." middle="▇" end=".182]" delay={0.5} />
                    <HideIP start="// connecting to [225.27." middle="▇" end=".110]" delay={1} />
                    <HideIP start="// waiting response from [148.200." middle="▇" end=".182]" delay={1.5} />
                    <PlainResponse text="// response status [OK]" delay={2} />
                    <PlainResponse text="// connecting to the assistant..." delay={2.5} />
                    <PlainResponse text="// connection successful!" delay={3.5} />
                    <PlainResponse text="// assistant is ready to respond, ask something about [Ioane Natroshvili]" delay={4} />
                    {content.map((c, i) => {
                        return (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
                                className={`flex p-5 flex-wrap ${c.type === "user" ? "ml-auto" : ""}`}>
                                {c.content.split(/<\D>\D<\/\D>/g).map((char, j) => {
                                    return (
                                        <motion.span
                                            key={j + "a"}
                                            dangerouslySetInnerHTML={{ __html: char }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { delay: 0.1 * j } }}
                                        />
                                    );
                                })}
                            </motion.div>
                        );
                    })}
                </div>
            )}
            <div className="px-10 py-5 font-mono text-electric-green border-0 border-t border-purple-950 shadow-[0_-1px_5px_-2px] shadow-accent-tertiary">
                <motion.div className="flex text-nowrap gap-4 glow-green">
                    <span>user_prompt:</span>
                    <input type="text" className="outline-none w-full" value={prompt} onChange={handleChangePrompt} onKeyDown={sendPrompt} />
                </motion.div>
            </div>
        </div>
    );
};

export default AIChatBox;
