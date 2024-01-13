import styles from "./Button.module.scss";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    transparent?: boolean;
}

export default function Button(
    props: ButtonProps
) {
    const { className, transparent, ...restProps } = props;
    return (
        <button 
            className={`${styles.button} ${transparent ? styles.button_transparent : ""} ${className || ""}`}
            {...restProps}
        />
    )
}