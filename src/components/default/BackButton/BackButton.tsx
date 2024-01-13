import styles from "./BackButton.module.scss";
import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import backImg from "@/assets/UI/back.png";

export default function BackButton(
    { onClick }: { onClick?: () => void }
) {
    return (
        <Button 
            transparent
            className={styles["back-button"]}
            onClick={onClick}
        >
            <Image
                src={backImg}
                alt="back"
            />
        </Button>
    )
}