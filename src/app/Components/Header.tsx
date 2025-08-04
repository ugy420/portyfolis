import Button from "./ui/Button"
import styles from './Header.module.css';

export default function Header(){
    return (
        <div className={styles.container}>
            <div>
                <a href="">.ug</a>
            </div>
            <div className={styles.buttons}>
                <Button text="Curriculum Vitae"/>
                <Button text="☰" className={styles.hamburger}/>
            </div>
        </div>
    );
}