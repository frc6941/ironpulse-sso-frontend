'use client'

import AdminNavBar from "@/components/admin-nav";

export default function Client() {
  return (
    <>
      <header className="top-0 w-full">
        <AdminNavBar current="clients"></AdminNavBar>
      </header>
    </>
  )
}