import { useState, useEffect } from "react";

const sections = ["hero", "about", "experience", "projects", "contact"];

export default function ScrollDots() {
  const [active, setActive] = useState("hero");

  // Detect current section in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos <= bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden sm:flex transform space-y-1 fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 
            ${
              active === id
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
        />
      ))}
    </div>
  );
}
