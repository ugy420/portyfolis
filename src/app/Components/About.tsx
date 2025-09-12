import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className="title" id="about"><span><a href="#about">#</a></span> About Me</div>
      <div className={styles.content}>
        <Image src={"/about.png"} alt="Me" width={250} height={200} />
        <div className={styles.text_div}>
          Hello! I am Ugyen Wangda Gyeltshen. Lorem ipsum dolor sit amet
          consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
          ultrices mauris. Maecenas vitae mattis tellus..
        </div>
      </div>
    </div>
  );
}
