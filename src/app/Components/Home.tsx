import styles from './Home.module.css';

export default function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.title_div}>
                Full Stack
                <div className={styles.white}>
                Developer
                </div>
            </div>
            <div className={styles.text_div}>
                Hello I'm Ugyen. A developer from Bhutan 🇧🇹
            </div>
            <div className={styles.icons_div}>
                <a href="https://github.com/ugy420">
                    <img src='github.svg' height="50"/>
                </a>
                <a href="https://www.linkedin.com/in/ugyen-wangda-gyeltshen-6a7b21270/">
                    <img src="linkedin.svg" height="50"/>
                </a>
            </div>
        </div>
    );
}