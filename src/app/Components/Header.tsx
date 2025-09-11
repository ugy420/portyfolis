"use client"

import Button from "./ui/Button"
import styles from './Header.module.css';
import {motion, useScroll} from "motion/react"

export default function Header(){
    const { scrollYProgress } = useScroll()

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
                <a href="">.ug</a>
            </div>
            <div>
                <Button text="☰" className={styles.hamburger}/>
            </div>
        </div>
    );
}