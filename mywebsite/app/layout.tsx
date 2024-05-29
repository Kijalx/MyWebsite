import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import NavBar from "./components/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <title>Your Page Title</title>
        <link rel="stylesheet" href="globals.css" />
      </head>
      <body>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <NavBar />
            {children}
            <footer className="footer">
              <div className="container mx-auto">
                <p>&copy; 2024 Aleksander Kijewski. All rights reserved.</p>
              </div>
            </footer>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default Layout;
