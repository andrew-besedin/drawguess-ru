import styles from "@/styles/Game.module.scss";
import DrawCanvas from "@/components/pages/game/DrawCanvas/DrawCanvas";
import PlayerItem from "@/interfaces/game/PlayerItem";
import playerImg from "@/assets/UI/player.png";
import Image from "next/image";
import Chat from "@/components/pages/game/Chat/Chat";


export default function Game() {

    const players: PlayerItem[] = [
        {
            id: "1",
            nickname: "player1",
            score: 300,
        },
        {
            id: "2",
            nickname: "player2",
            score: 400,
        },
        {
            id: "3",
            nickname: "player3",
            score: 100,
        },
        {
            id: "4",
            nickname: "player4",
            score: 50,
        }
    ];

    function PlayersList({ items }: { items: PlayerItem[] }) {

        function Player({ item, index }: { item: PlayerItem, index: number }) {
            const { nickname, score } = item;
            return (
                <div className={styles["players-list__item"]}>
                    <div>
                        <h5>#{index}</h5>
                        <Image 
                            src={playerImg}
                            alt="player"
                        />
                    </div>
                    <div>
                        <h6>{nickname}</h6>
                        <p>Очки: {score}</p>
                    </div>
                </div>
            )
        }

        return (
            <div className={styles["players-list"]}>
                {
                    items.sort((a, b) => b.score - a.score).map((e, i) => (
                        <Player 
                            key={e.id} 
                            item={e} 
                            index={i + 1} 
                        />
                    ))
                }
            </div>
        )
    }

    

    return (
        <>
            <main className={styles.game__wrapper}>
                <div className={styles.game}>
                    <div className={styles.game__top}>
                        <div>
                            <h5>Время: 27</h5>
                            <h5>Раунд: 3 из 10</h5>
                        </div>
                        <h2>К*А***Й</h2>
                    </div>
                    <div className={styles.game__bottom}>
                        <DrawCanvas />
                        <div className={styles["game__info-panel"]}>
                            <PlayersList 
                                items={players}
                            />
                            <Chat />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}