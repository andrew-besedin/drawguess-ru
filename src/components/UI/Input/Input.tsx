import styles from "./Input.module.scss";

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
    const { className, ...restProps } = props;
    return (
        <input 
            className={`${styles.input} ${props.className || ""}`}
            {...restProps}
        />
    )
}