'use client'

import AdminNavBar from "@/components/admin-nav";

export default function Page() {
  return (
    <>
      <header className="top-0 w-full">
        <AdminNavBar current="overview"></AdminNavBar>
      </header>
    </>
  )
}