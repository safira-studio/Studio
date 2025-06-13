import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Iceberg as Test,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const test = Test({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-test",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
