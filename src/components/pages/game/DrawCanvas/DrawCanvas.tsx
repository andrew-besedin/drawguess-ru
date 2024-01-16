"use client"
import Button from "@/components/UI/Button/Button";
import styles from "./DrawCanvas.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import paletteImg from "@/assets/UI/palette.png";

export default function DrawCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pickerRef = useRef<HTMLInputElement>(null);

    const [pickedColor, setPickedColor] = useState("#000000");
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        drawCanvas();
    }, []);

    function drawCanvas() {
        const canvas = canvasRef.current;
        const ctx = canvas && canvas.getContext("2d");
        if (ctx) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height); 
        }
    }

    function onMouseDown(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        const canvas = canvasRef.current;
        const ctx = canvas && canvas.getContext("2d");

        if (!ctx) return;

        const { top, left } = canvas.getBoundingClientRect();
  
        setMouseDown(true);
        ctx.beginPath();
        ctx.moveTo(event.clientX - left, event.clientY - top);
    }

    function onMouseMove(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        if (!mouseDown) return;
        const canvas = canvasRef.current;
        const ctx = canvas && canvas.getContext("2d");

        if (ctx) {
            const { top, left } = canvas.getBoundingClientRect();
            
            ctx.strokeStyle = pickedColor;
            ctx.lineWidth = 3;
            ctx.lineTo(event.clientX - left, event.clientY - top);
            ctx.stroke();
        }
    }

    function colorInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPickedColor(event.currentTarget.value);
    }

    return (
        <div className={styles.canvas__wrapper}>
            <canvas 
                ref={canvasRef} 
                width={2000}
                height={1000}
                className={styles.canvas}
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={() => setMouseDown(false)}
                onMouseLeave={() => setMouseDown(false)}
            />
            <Button 
                transparent 
                className={styles["color-picker"]}
                onClick={() => pickerRef.current?.click()}
            >
                <Image 
                    src={paletteImg}
                    alt="color_picker"
                />
                <svg xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8" fill={pickedColor} stroke="black" />
                </svg>
                <input 
                    ref={pickerRef}
                    type="color"
                    onChange={colorInputChange}
                />
            </Button>
        </div>
    );
}