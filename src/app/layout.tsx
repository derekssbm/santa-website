import "./globals.css";
import { Righteous, Montserrat } from "next/font/google"; // Import both fonts

// Create instances for both fonts
const righteous = Righteous({
  subsets: ["latin"],
  weight: "400", // Righteous is available in one weight
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose normal (400) and bold (700) weights for Montserrat
});

export const metadata = {
  title: "Solrise Website",
  description: "Empowering entrepreneurs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
