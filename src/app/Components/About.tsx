'use client'

import styles from "./About.module.css";
import Image from "next/image";
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{amount:0.5}}
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
          Hello! I am Ugyen Wangda Gyeltshen. I have a keen interest in web
          development and I want to be
        </div>
      </div>
    </motion.div>
  );
}
