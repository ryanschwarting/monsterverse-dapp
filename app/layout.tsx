import type { Metadata, Viewport } from "next";
import WalletContextProvider from "../context/WalletContextProvider";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donate Solana",
  description:
    "Support my developer journey on the solana blockchain by donating Solana!",
  icons: "/solana.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  );
}
