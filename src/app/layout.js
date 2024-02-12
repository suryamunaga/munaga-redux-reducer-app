"use client"
import { Inter } from "next/font/google";
import "./globals.css";

import { appRecuder } from "@/reducer/appReducer";
import { init } from "@/utilis/init";
import { useReducer } from "react";
import { Provider } from "@/context/appContext";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
 const [state,dispatch]= useReducer(appRecuder,init)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider value={{state,dispatch}}>{children}</Provider>
        
        </body>
    </html>
  );
}
