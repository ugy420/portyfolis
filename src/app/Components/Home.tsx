import styles from './Home.module.css';
import Button from './ui/Button';

export default function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.text_div}>
                Hello I'm,<br/>Ugyen Wangda Gyeltshen,
            </div>
            <div className={styles.title_div}>
                Full Stack
                <div className={styles.white}>
                Developer
                </div>
            </div>
                <Button text="Curriculum Vitae"/>
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