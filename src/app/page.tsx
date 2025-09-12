import Image from "next/image";
import styles from "./page.module.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Stack from "./Components/Stack"
import Contact from "./Components/Contact";
import SideBar from "./Components/Sidebar";

export default function Page() {
  return (
    <div>
      {/* <SideBar/> */}
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
