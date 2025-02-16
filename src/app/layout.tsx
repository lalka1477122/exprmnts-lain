import type { Metadata } from "next";
import {NavigationMenuDemo} from "./header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/btntheme";


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
<NavigationMenuDemo/>
        {children}

          </ThemeProvider>
        </body>
    </html>
  );
}
