"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Member = {
  id: number
  uid: string
  username: string
  email: string
  phone: string
}

export const columns: Array<ColumnDef<Member>> = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
]
