import { useEffect, useState } from "react";

export function useActiveSection(initial = "about") {
    const [activeSection, setActiveSection] = useState(initial);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.4 },
        );

        document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return activeSection;
}
