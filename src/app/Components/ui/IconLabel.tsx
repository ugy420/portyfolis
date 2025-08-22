import styles from './IconLabel.module.css'

interface IconLabelProps {
    source: string;
    label: string;
    width?: string;
    height?: string;

}

export default function IconLabel({source, label, width, height}: IconLabelProps){
    return (
        <div className={styles.container}>
            <img src={source} width={width? width : "40px"} height={height?height:"40px"} alt={label} /> {label}
        </div>
    )
}