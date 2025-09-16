"use client";

import Drawer from "./Drawer"
import styles from "./Header.module.css";
import { motion, useScroll } from "motion/react";
import { useState, useRef } from "react";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const showDialog = useRef<() => void>(() => {});

  let [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(() => !open);
    showDialog.current();
  }

  function handleClose(){
    setOpen(()=> false);
  }

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
        onClick={() => openDialog()}
      >
        <span></span>
        <span></span>
      </div>
      <Drawer showDialog={showDialog} onCloses={handleClose}/>
    </div>
  );
}
