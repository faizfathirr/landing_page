"use client";

import { motion } from "framer-motion";

export default function CloudTransition() {
  return <div className="cloud-transition relative h-44 overflow-hidden" aria-hidden="true"><motion.div className="cloud cloud-one" animate={{ x: [0, 45, 0], y: [0, -8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} /><motion.div className="cloud cloud-two" animate={{ x: [0, -55, 0], y: [0, 10, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} /><motion.div className="cloud cloud-three" animate={{ x: [0, 28, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} /><div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] to-transparent" /></div>;
}
