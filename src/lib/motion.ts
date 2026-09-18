import type { Variants } from "motion/react";

export const fadeUp: Variants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

export const stagger: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;

export const infiniteLinear = (duration: number) => ({
    duration,
    repeat: Infinity,
    ease: "linear" as const,
});

export const infiniteEase = (duration: number) => ({
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
});
