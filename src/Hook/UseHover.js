import { useEffect, useState, useRef } from "react";

const useHover = () => {
  const [isHovered, setHovered] = useState(false);

  const ref = useRef(null);

  const handleMouseover = () => setHovered(true);
  const handleMouseout = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseover);
      node.addEventListener("mouseout", handleMouseout);

      return () => {
        node.removeEventListener("mouseover", handleMouseover);
        node.removeEventListener("mouseout", handleMouseout);
      };
    }
  }, [ref.current]);

  return [ref, isHovered];
};

export default useHover;
