"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const particles = [
  ["4%", 0, 13, 80, 12], ["14%", 4, 16, -65, 9], ["27%", 1.5, 14, 105, 15], ["39%", 7, 18, -90, 10],
  ["53%", 3, 15, 70, 13], ["66%", 9, 17, -110, 11], ["78%", 5, 14, 95, 14], ["91%", 2, 19, -75, 9],
] as const;

export default function FallingLeaves() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const update = () => setLight(document.documentElement.classList.contains("light"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return <div className="falling-leaves" aria-hidden="true">{particles.map(([left, delay, duration, drift, size], index) => <motion.span key={index} className={light ? "falling-leaf" : "falling-snow"} style={{ left, width: light ? size : size * .75, height: light ? size * 1.5 : size * .75 }} initial={{ y: "-12vh", x: 0, rotate: 0, opacity: 0 }} animate={{ y: "115vh", x: [0, drift, drift * -.45, drift * .7], rotate: light ? [0, 160, 350, 620] : [0, 45, 90], opacity: [0, .8, .75, 0] }} transition={{ duration, delay, repeat: Infinity, ease: "linear" }} />)}</div>;
}
