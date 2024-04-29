'use client'

import AdminNavBar from "../../components/admin-nav";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentSubpage = pathname.substring(7);
  console.log(currentSubpage);

  return (
    <>
      <header className="top-0 w-full">
        <AdminNavBar current={currentSubpage} />
      </header>
      {children}
    </>
  );
}
