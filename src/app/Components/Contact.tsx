"use client";

import styles from "./Contact.module.css";
import Button from "./ui/Button";
import Image from "next/image";
import InputLabel from "./ui/InputLabel";
import { useState } from "react";
import {motion} from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit() {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((error) => console.error("Error:", error));

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  function handleChange(e: { target: { name: string; value: string } }) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x:50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ amount:0.5}}
      className={styles.container}>
      <div className="title" id="contact">
        <span>
          <a href="#contact">#</a>
        </span>{" "}
        Get In Touch
      </div>
      <div className={styles.zabody}>
        <div className={styles.zaside}>
          <Image src="/getin.png" alt="Me" width={150} height={150}></Image>
          Thank You!
        </div>
        <div className={styles.form}>
          <InputLabel
            ty="text"
            nm="Name"
            name="name"
            ph="John Dorji"
            onChange={handleChange}
            value={formData.name}
            incomplete={formData.name === ""}
          />
          <InputLabel
            ty="email"
            nm="Email"
            name="email"
            ph="example@email.com"
            onChange={handleChange}
            value={formData.email}
            incomplete={formData.email === "" || !formData.email.includes("@")}
          />
          <InputLabel
            nm="Message"
            name="message"
            ph="Hey"
            textarea
            onChange={handleChange}
            value={formData.message}
            incomplete={formData.message === ""}
          />
          <Button text="Send" className={styles.btn} onClick={handleSubmit} disabled={!(formData.name && formData.email && formData.email.includes("@") && formData.message)} />
        </div>
      </div>
    </motion.div>
  );
}
