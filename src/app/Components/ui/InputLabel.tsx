import styles from "./InputLabel.module.css";

export default function InputLabel({
  nm,
  ty,
  ph,
  textarea,
  name,
  value,
  onChange,
  incomplete,
}: {
  nm: string;
  ty?: string;
  ph: string;
  name: string;
  textarea?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  incomplete: boolean;
}) {
  return (
    <div className={`${styles.input_div} ${textarea ? styles.fullwidth : ""}`}>
      <label htmlFor={nm}>{nm}</label>
      {textarea ? (
        <textarea
          id={nm}
          name={name}
          placeholder={ph}
          value={value}
          onChange={onChange}
          className={incomplete ? styles.incomplete : ""}
        ></textarea>
      ) : (
        <input
          id={nm}
          type={ty}
          name={name}
          placeholder={ph}
          value={value}
          onChange={onChange}
          className={incomplete ? styles.incomplete : ""}
        />
      )}
    </div>
  );
}
