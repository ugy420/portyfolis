import Image from "next/image";
import styles from "./page.module.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Stack from "./Components/Stack"
import Contact from "./Components/Contact";
import SideBar from "./Components/Sidebar";
import Email from "./Components/Email";

export default function Page() {
  return (
    <div>
      <a href="mailto:ugyenwgyeltshen.ug@gmail.com" className={styles.email}>
        <Email/>
      </a>
      <header className={styles.header}>
        <Header/>
      </header>
      <Home/>
      <About/>
      <Stack/>

      <Contact/>
    </div>
  );
}
