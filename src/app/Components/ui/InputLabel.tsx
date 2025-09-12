import styles from "./InputLabel.module.css";

export default function InputLabel({
  nm,
  ty,
  ph,
  textarea,
}: {
  nm: string;
  ty?: string;
  ph: string;
  textarea?: boolean;
}) {
  return (
    <div className={`${styles.input_div} ${textarea?styles.fullwidth:''}`}>
      <label htmlFor={nm}>{nm}</label>
      {textarea ? (
        <textarea id={nm} placeholder={ph}></textarea>
      ) : (
        <input id={nm} type={ty} placeholder={ph} />
      )}
    </div>
  );
}
