import { useEffect } from "react";
const useMouseGlow = (containerId: string) => {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      container.style.background = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(155, 155, 155, 0.1), transparent 150px)`;
    };

    const handleMouseLeave = () => {
      container.style.background = "";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerId]);
};

export default useMouseGlow;
;
