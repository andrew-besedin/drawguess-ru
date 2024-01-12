import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import logoImg from "@/assets/UI/logo.png";

export default function Home() {
    return (
        <>
            <div className={styles.home__wrapper}>
                <div className={styles.home}>
                    <Image 
                        src={logoImg}
                        alt="drawguess"
                        className={styles.home__logo}
                    />
                    <h1>DrawGuess.ru</h1>
                </div>
            </div>
        </>
    );
}
