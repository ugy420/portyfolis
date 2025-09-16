"use client";

import styles from "./Stack.module.css";
import IconLabel from "./ui/IconLabel";
import { motion } from "framer-motion";

type StackItem = {
  source: string;
  label: string;
  width?: string;
  height?: string;
};

const data: Record<string, StackItem[]> = {
  Frontend: [
    { source: "javascript.png", label: "JavaScript" },
    { source: "typescript.png", label: "TypeScript" },
    { source: "react.png", label: "React" },
    { source: "nextjs.png", label: "Next.js" },
    {
      source: "tailwind.png",
      label: "Tailwind CSS",
      width: "45px",
      height: "30px",
    },
  ],
  Backend: [
    { source: "node.png", label: "Node.js" },
    { source: "express.svg", label: "Express.js" },
  ],
  Database: [
    { source: "mysql.png", label: "MySQL" },
    { source: "postgresql.png", label: "PostgreSQL" },
  ],
  Tools: [
    { source: "figma.svg", label: "Figma" },
    { source: "git.png", label: "Git" },
  ],
};

export default function Stack() {
  return (
    <div className={styles.container}>
      <div className="title" id="stack">
        <span>
          <a href="#stack">#</a>
        </span>
        Tech Stack
      </div>
      {Object.entries(data).map(([category, items]) => (
        <div className={styles.grid} key={category}>
          <motion.div
            key={category}
            className={styles.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.4 }}
          >
            {category}
          </motion.div>
          <div className={styles.gridItem}>
            {items.map(({ source, label, width, height }, idx) => (
                <motion.div
                  key={label + idx}
                  initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.25 }}
                    viewport={{ amount: 0.6 }}
                >
              <IconLabel
                key={label}
                source={source}
                label={label}
                width={width}
                height={height}
              />
                </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
