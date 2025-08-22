import styles from './About.module.css'

export default function About(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                About Me <hr/>
            </div>

            <div>
                Hello! I am Ugyen Wangda Gyeltshen. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
            </div>
        </div>
    );

}
