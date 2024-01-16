import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./globals.scss";

const inter = Balsamiq_Sans({ subsets: [ "latin" ], weight: [ "400", "700" ] });

export const metadata: Metadata = {
    title: "DrawGuess.ru - рисуй, угадывай и веселись.",
    description: "DrawGuess.ru - это онлайн-игра, в которой участники поочередно рисуют предложенные слова, а остальные игроки пытаются угадать, что изображено на рисунке.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
