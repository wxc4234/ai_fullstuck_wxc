import { useEffect, useState } from "react";

export function useScroll(instance) {
  const [y, setY] = useState(instance);

  useEffect(() => {
    const handleScroll = () => {
      setY(document.documentElement.scrollTop);
      console.log(y);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return [y];
}
