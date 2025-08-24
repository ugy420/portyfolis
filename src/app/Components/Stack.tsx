import styles from './Stack.module.css'
import IconLabel from './ui/IconLabel'

export default function Stack(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Tech Stack <hr/>
            </div>
            <div className={styles.grid}>
                <div className={styles.category}>
                    Frontend
                </div>
                <div className={styles.gridItem}>
                    <IconLabel source='javascript.png' label='JavaScript'/>
                    <IconLabel source='typescript.png' label='TypeScript'/>
                    <IconLabel source='react.png' label="React"/>
                    <IconLabel source='nextjs.png' label="Next.js"/>
                    <IconLabel source='tailwind.png' width="45px" height='30px' label="Tailwind CSS"/>
                </div>
                <div className={styles.category}>
                    Backend
                </div>
                <div className={styles.gridItem}>
                    <IconLabel source='node.png' label="Node.js"/>
                    <IconLabel source='express.svg' label="Express.js"/>
                </div>
                <div className={styles.category}>
                    Database
                </div>
                <div className={styles.gridItem}>
                    <IconLabel source='mysql.png' label="MySQL"/>
                    <IconLabel source='postgresql.png' label="PostgreSQL"/>
                </div>
                <div className={styles.category}>
                    Tools
                </div>
                <div className={styles.gridItem}>
                    <IconLabel source="figma.svg" label="Figma"/>
                    <IconLabel source="git.png" label="Git"/>
                </div>
            </div>
        </div>
    )
}