"use client"
import Image from "next/image";
import styles from "./Dropdown.module.scss";
import arrowImg from "@/assets/UI/arrow.svg";
import { useState } from "react";

export default function Dropdown() {
    const [opened, setOpened] = useState(false);

    return (
        <div className={styles.dropdown__wrapper}>
            <button className={styles.dropdown__body} onClick={() => setOpened(prev => !prev)}>
                <p>1</p>
                <Image 
                    className={opened ? styles.dropdown__body_opened : undefined}
                    src={arrowImg}
                    alt="arrow"
                />
            </button>
        </div>
    )
}