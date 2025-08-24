import styles from './Contact.module.css'

export default function Contact(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Contact <hr/>
            </div>
            <div className={styles.zabody}>
                <div>
                    Let's work together
                </div>
                <div className={styles.form}>
                    <input type="text" placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type="text" placeholder='Message'/>                   
                </div>

            </div>
        </div>
    )
}