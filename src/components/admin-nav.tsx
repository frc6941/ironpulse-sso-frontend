import Logo from "@/components/icons/logo";
import Link from "next/link";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";

interface AdminNavBarProps {
  current: string
}

interface Route {
  id: string
  name: string,
  link: string,
}

const routes: Route[] = [
  {
    id: "overview",
    name: "Overview",
    link: "/admin"
  },
  {
    id: "members",
    name: "Members",
    link: "/admin"
  },
  {
    id: "clients",
    name: "Cllients",
    link: "/admin"
  },
  {
    id: "settings",
    name: "Settings",
    link: "/admin"
  }
]

export default function AdminNavBar({ current }: AdminNavBarProps) {
  const links = routes.map(({ id, name, link }: Route) =>
    <Link href={link} className={`text-sm font-medium transition-colors hover:text-primary ${current === id ? "" : "text-muted-foreground"}`}>
      {name}
    </Link>
  )

  return (
    <>
      <div className="flex flex-row items-center space-x-3 h-16">
        <Logo className="w-12 h-12 m-0 ml-6 pt-0 pb-0" fill="fill-primary"></Logo>
        <h1 className="text-lg font-bold">IronPulse SSO Admin</h1>
        <nav className="flex flex-row pl-10 space-x-8">
          {links}
        </nav>
        <Avatar className="absolute right-6">
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
      </div>
      <Separator></Separator>
    </>
  )
}