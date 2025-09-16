import styles from './Stack.module.css'
import IconLabel from './ui/IconLabel'

let data = {
  "Frontend": [
    { "source": "javascript.png", "label": "JavaScript" },
    { "source": "typescript.png", "label": "TypeScript" },
    { "source": "react.png", "label": "React" },
    { "source": "nextjs.png", "label": "Next.js" },
    { "source": "tailwind.png", "label": "Tailwind CSS", "width": "45px", "height": "30px" }
  ],
  "Backend": [
    { "source": "node.png", "label": "Node.js" },
    { "source": "express.svg", "label": "Express.js" }
  ],
  "Database": [
    { "source": "mysql.png", "label": "MySQL" },
    { "source": "postgresql.png", "label": "PostgreSQL" }
  ],
  "Tools": [
    { "source": "figma.svg", "label": "Figma" },
    { "source": "git.png", "label": "Git" }
  ]
}

export default function Stack(){
    return (
        <div className={styles.container}>
            <div className="title" id="stack">
                <span>
                    <a href="#stack">
                        #
                    </a>
                </span>
                        Tech Stack
            </div>
            <div className={styles.grid}>
                <div className={styles.category}>
                   Frontend
                </div>
                <div className={styles.gridItem}>
                    {/* {data.map(data)} */}
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