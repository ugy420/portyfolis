import styles from './Contact.module.css'
import Button from './ui/Button'

export default function Contact(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Get in touch
            </div>
            <div className={styles.zabody}>
                <div className={styles.zatitle}>
                    Get in Touch
                </div>
                <div className={styles.form}>
                    <input type="text" placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <textarea></textarea>
                    <Button text="Send" className={styles.btn}/>               
                </div>
            </div>
        </div>
    )
}