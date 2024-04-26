import Logo from "@/components/icons/logo";
import Link from "next/link";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {ModeToggle} from "@/components/mode-toggle";

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
    link: "/admin/members"
  },
  {
    id: "clients",
    name: "Clients",
    link: "/admin/clients"
  },
  {
    id: "settings",
    name: "Settings",
    link: "/admin/settings"
  }
]

export default function AdminNavBar({ current }: AdminNavBarProps) {
  const links = routes.map(({ id, name, link }: Route) =>
    <Link key={id} href={link} className={`text-sm font-medium transition-colors hover:text-primary ${current === id ? "" : "text-muted-foreground"}`}>
      {name}
    </Link>
  )

  return (
    <>
      <div className="flex flex-row items-center space-x-3 h-16">
        <Logo className="w-12 h-12 m-0 ml-6 pt-0 pb-0" fill="fill-primary"></Logo>
        <h1 className="text-lg font-bold">IronPulse SSO Admin</h1>
        <ModeToggle></ModeToggle>
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