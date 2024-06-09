import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/styles.css";
import Nav from "./components/navigation/nav";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garnicopes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Nav />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
};
