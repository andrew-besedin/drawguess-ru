"use client"
import styles from "./DrawCanvas.module.scss";
import { useEffect, useRef, useState } from "react";
// import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";

export default function DrawCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
            
            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;
            ctx.lineTo(event.clientX - left, event.clientY - top);
            ctx.stroke();
        }
    }

    return (
        <canvas 
            ref={canvasRef} 
            width={1000}
            height={500}
            // className={styles.canvas}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseUp={() => setMouseDown(false)}
            onMouseLeave={() => setMouseDown(false)}
        />
    );
}