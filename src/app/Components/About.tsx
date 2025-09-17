"use client";

import styles from "./About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.container}
    >
      <div className="title" id="about">
        <span>
          <a href="#about">#</a>
        </span>{" "}
        About Me
      </div>
      <div className={styles.content}>
        <Image src={"/about.png"} alt="Me" width={250} height={200} />
        <div className={styles.text_div}>
          <p>
          Hello! I am Ugyen Wangda Gyeltshen, a developer from Bhutan, currently
          working at DrukSmart. I dedicate myself to building impactful and
          user-friendly applications. I enjoy exploring new technologies,
          solving problems through code, and continuously learning to improve my
          craft.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
