"use client";

import Button from "./ui/Button";
import styles from "./Header.module.css";
import { motion, useScroll } from "motion/react";
import { useState } from "react";

export default function Header() {
  const { scrollYProgress } = useScroll();
  let [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#57C4E5",
        }}
      />
      <div>
        <a href="#home">.ug</a>
      </div>
      <div
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
