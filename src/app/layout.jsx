import { Inter } from "next/font/google";
import "./globals.css";
import { SnackbarProvider } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GTS",
  description: "Global Talent Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: 'top' }}>
          {children}
        </SnackbarProvider>
      </body>
    </html>
  );
}
