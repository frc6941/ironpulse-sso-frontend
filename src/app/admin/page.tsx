'use client'

import Logo from "@/components/icons/logo";
import {Separator} from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <header className="top-0 w-full">
        <div className="flex flex-row items-center space-x-3 h-16">
          <Logo className="w-12 h-12 m-0 ml-6 pt-0 pb-0" fill="fill-primary"></Logo>
          <h1 className="text-lg font-bold">IronPulse SSO Admin</h1>
        </div>
        <Separator></Separator>
      </header>
    </>
  )
}