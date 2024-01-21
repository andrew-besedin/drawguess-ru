import styles from "@/styles/RoomSetup.module.scss";
import BackButton from "@/components/default/BackButton/BackButton";
import Link from "next/link";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

export default function RoomSetup() {

    return (
        <>
            <main className={styles["room-setup__wrapper"]}>
                <div className={styles["room-setup"]}>
                    <div className={styles["room-setup__settings"]}>
                        <div className={styles["room-setup__settings-list"]}>
                            <h5>Настройки комнаты:</h5>
                            <div className={styles["room-setup__settings-input"]}>
                                <p>Время на рисование (сек.)</p>
                                <Input />
                            </div>
                            <div className={styles["room-setup__settings-input"]}>
                                <p>Количество раундов</p>
                                <Dropdown />
                            </div>
                        </div>
                        <div className={styles["room-setup__input"]}>
                            <p>Код комнаты:</p>
                            <Input 
                                value="9EJoij704p7g"
                                readOnly
                            />
                        </div>
                        <div className={styles["room-setup__input"]}>
                            <p>Ссылка на подключение к комнате:</p>
                            <Input 
                                value="https://drawguess.ru/?9EJoij704p7g"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className={styles["room-setup__players"]}>
                        <div className={styles["room-setup__players-list"]}>
                            <h6>Присоединившиеся игроки:</h6>
                        </div>
                        <Link href="/game/12">
                            <Button>Играть</Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Link href="/">
                <BackButton />
            </Link>
        </>
    )
}