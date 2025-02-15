import type { Metadata } from "next";
import Header from "./header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>


          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >       
<Header/>
        {children}

          </ThemeProvider>
        </body>
    </html>
  );
}
