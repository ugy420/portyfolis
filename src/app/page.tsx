import Image from "next/image";
import styles from "./page.module.css";
import Home from "./Components/Home";
import Header from "./Components/Header";

export default function Page() {
  return (
    <div>
      <Header/>
      <Home/>
      
    </div>
  );
}
