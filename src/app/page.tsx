"use client"
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import logoImg from "@/assets/UI/logo.png";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { useState } from "react";
import BackButton from "@/components/default/BackButton/BackButton";
import Link from "next/link";

export default function Home() {
    const [nickname, setNickname] = useState("");
    const [roomCode, setRoomCode] = useState("");
    const [continued, setContinued] = useState(false);

    function StartPanel() {
        return (
            <>
                <Input
                    className={styles.home__input}
                    placeholder="Твой ник"
                    value={nickname}
                    onInput={event => setNickname(event.currentTarget.value)}
                />
                <div
                    className={styles.home__buttons}
                >
                    <Button
                        className={styles.home__button}
                        onClick={() => setContinued(true)}
                    >
                        Присоединиться
                    </Button>
                    <Button
                        className={styles.home__button}
                    >
                        Создать игру
                    </Button>
                </div>
            </>
        )
    }

    function ContinuePanel() {
        return (
            <>
                <Input
                    className={styles.home__input}
                    placeholder="Введи код комнаты"
                    value={roomCode}
                    onInput={event => setRoomCode(event.currentTarget.value)}
                />
                <div
                    className={styles.home__buttons}
                >
                    <Link href="/game/12" className={styles.home__button_wrapper}>
                        <Button
                            className={styles.home__button}
                        >
                            Присоединиться
                        </Button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <main className={styles.home__wrapper}>
                <div className={styles.home}>
                    <Image 
                        src={logoImg}
                        alt="drawguess"
                        className={styles.home__logo}
                    />
                    <h1>DrawGuess.ru</h1>
                    {continued ? ContinuePanel() : StartPanel()}
                    {!continued &&
                        <p
                            className={styles.home__description}
                        >
                            DrawGuess.ru - это онлайн-игра, в которой участники поочередно рисуют предложенные слова, а остальные игроки пытаются угадать, что изображено на рисунке. Игра отлично подходит для тех, кто любит творчески проявлять себя и одновременно наслаждаться разгадыванием увлекательных загадок.
                        </p>
                    }
                </div>
            </main>
            {continued && 
                <BackButton 
                    onClick={() => setContinued(false)}
                />
            }
        </>
    );
}
