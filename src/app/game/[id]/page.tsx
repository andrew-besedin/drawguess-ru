import styles from "@/styles/Game.module.scss";
import DrawCanvas from "@/components/pages/game/DrawCanvas/DrawCanvas";

export default function Game() {
    return (
        <>
            <main className={styles.game}>
                <DrawCanvas />
            </main>
        </>
    )
}