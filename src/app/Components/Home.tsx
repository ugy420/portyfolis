'use client'

import styles from "./Home.module.css";
import Button from "./ui/Button";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
      className={styles.container}
      id="home"
    >
      <div className={styles.text_div}>
        Hello, I'm
        <br />
        Ugyen Wangda Gyeltshen.
      </div>
      <div className={styles.title_div}>
        Full Stack&nbsp;
        <div className={styles.white}>Developer</div>
      </div>
      <Button text="Curriculum Vitae" />
      <div className={styles.icons_div}>
        <a href="https://github.com/ugy420" aria-label="github">
          <img src="github.svg" height="50" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/ugyen-wangda-gyeltshen-6a7b21270/" aria-label="linkedin">
          <img src="linkedin.svg" height="50" alt="linkedin"/>
        </a>
      </div>
    </motion.div>
  );
}
