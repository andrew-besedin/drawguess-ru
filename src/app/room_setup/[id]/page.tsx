import styles from "@/styles/RoomSetup.module.scss";
import BackButton from "@/components/default/BackButton/BackButton";
import Link from "next/link";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";

export default function RoomSetup() {
    return (
        <>
            <main className={styles["room-setup__wrapper"]}>
                <div className={styles["room-setup"]}>
                    <div className={styles["room-setup__settings"]}>
                        <div className={styles["room-setup__settings-list"]}></div>
                        <Input />
                    </div>
                    <div className={styles["room-setup__players"]}>
                        <div className={styles["room-setup__players-list"]}>

                        </div>
                        <Button>Играть</Button>
                    </div>
                </div>
            </main>
            <Link href="/">
                <BackButton />
            </Link>
        </>
    )
}