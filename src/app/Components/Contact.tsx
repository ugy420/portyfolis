import styles from './Contact.module.css'
import Button from './ui/Button'
import Image from 'next/image'
import InputLabel from './ui/InputLabel'

export default function Contact(){
    return (
        <div className={styles.container}>
            <div className="title" id="contact">
                Get In Touch
            </div>
            <div className={styles.zabody}>
                <div className={styles.zaside}>
                    <Image src="/getin.png" alt="Me" width={150} height={150}></Image>
                        Thank You!
                </div>
                <div className={styles.form}>
                    <InputLabel ty="text" nm="Name" ph="John Dorji"/>
                    <InputLabel ty="text" nm="Email" ph="example@email.com"/>
                    <InputLabel nm="Message" ph="Hey" textarea/>
                    <Button text="Send" className={styles.btn}/>             
                </div>
            </div>
        </div>
    )
}