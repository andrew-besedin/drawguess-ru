"use client"
import styles from "./Chat.module.scss";
import Input from "@/components/UI/Input/Input";
import MessageItem from "@/interfaces/game/MessageItem";
import { useState } from "react";


export default function Chat() {
    const [messages, setMessages] = useState<MessageItem[]>([]);
    const [messageText, setMessageText] = useState("");

    // Id counter state for demo, planned to delete in future
    const [idCounter, setIdCounter] = useState(0);

    function ChatMessage({ item, isGrey }: { item: MessageItem, isGrey: boolean }) {
        const { author, text } = item;
        return (
            <div className={`${styles.chat__message} ${isGrey ? styles.chat__message_grey : ""}`}>
                <p><span>{author}:</span> {text}</p>
            </div>
        )
    }

    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (!messageText) return;
        if (event.key === "Enter") {
            setMessages(prev => [ 
                ...prev,  
                {
                    id: idCounter.toString(),
                    text: messageText,
                    author: "me"
                }
            ]);
            setIdCounter(prev => prev + 1);
        }
    }

    return (
        <div className={styles.chat}>
            <div className={styles.chat__body}>
                {/* <ChatMessage item={{ author: "efsdf", text: "ssss" }} isGrey /> */}
                {
                    messages.map((e, i) => (
                        <ChatMessage key={e.id} item={e} isGrey={i % 2 === 0} />
                    ))
                }
            </div>
            <Input 
                className={styles.chat__input}
                placeholder="Набери свою догадку здесь"
                onKeyDown={onKeyDown}
                value={messageText}
                onInput={event => setMessageText(event.currentTarget.value)}
            />
        </div>
    )
}