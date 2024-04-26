'use client'

import AdminNavBar from "@/components/admin-nav";

export default function Admin() {
  return (
    <>
      <header className="top-0 w-full">
        <AdminNavBar current="overview"></AdminNavBar>
      </header>
      <main>
        <div className="flex flex-row">
          <h1 className="p-8 text-3xl font-bold">Overview</h1>
        </div>
      </main>
    </>
  )
}