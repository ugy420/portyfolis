import styles from './Stack.module.css'
import IconLabel from './ui/IconLabel'

export default function Stack(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Tech Stack <hr/>
            </div>
            <div className={styles.grid}>
                <div>
                    frontend
                </div>
                
                <div className={styles.gridItem}>
                    <IconLabel source='javascript.png' label='JavaScript'/>
                    <IconLabel source='typescript.png' label='TypeScript'/>
                    <IconLabel source='react.png' label="React"/>
                    <IconLabel source='nextjs.png' label="Next.js"/>
                    <IconLabel source='tailwind.png' width="45px" height='30px' label="Tailwind CSS"/>
                </div>
                <div>
                    backend
                </div>
                <div className={styles.gridItem}>
                    <IconLabel source='node.png' label="Node.js"/>
                    <IconLabel source='express.svg' label="Express"/>
                </div>
                <div>
                    database
                </div>
                <div className={styles.gridItem}>
                    <IconLabel source='postgresql.png' label="PostgreSQL"/> <IconLabel source='mysql.png' label="MySQL"/>
                </div>
            </div>
        </div>
    )
}