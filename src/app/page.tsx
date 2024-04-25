'use client'

import {ModeToggle} from "@/components/mode-toggle";
import Logo from "@/components/icons/logo";
import { useTheme } from "next-themes";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <header className="top-0 m-2 w-full h-14 flex flex-row items-center space-x-3">
        <Logo className="w-20 h-20 pl-6" fill={theme === "light" ? "black" : "white"}></Logo>
        <h1 className="text-xl font-bold">IronPulse SSO</h1>
        <ModeToggle></ModeToggle>
      </header>
      <main>
        <div className="bg-secondary rounded-xl w-[430px] h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1c1c1e">

        </div>
      </main>
    </>
  );
}
