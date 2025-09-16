export default function Button({ text, className, disabled, onClick }: { text: string, className?: string, disabled?: boolean, onClick?: () => void }) {
    return(
        <button className={className} disabled={disabled} onClick={onClick}>{text}</button>
    );
}