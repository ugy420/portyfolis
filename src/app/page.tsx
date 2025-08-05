import Image from "next/image";
import styles from "./page.module.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";

export default function Page() {
  return (
    <div>
      <header className={styles.header}>
        <Header/>
      </header>
      <Home/>
      <About/>
      
    </div>
  );
}
