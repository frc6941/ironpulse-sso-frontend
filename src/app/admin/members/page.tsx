"use client"

import { useEffect, useState } from "react"
import { testMemberData } from "../../../lib/test-data"
import { columns, Member } from "./columns"
import { DataTable } from "../../../components/data-table"
import { Button } from "../../../components/ui/button"
import { useToast } from "../../../components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

export default function Members() {
  const { toast } = useToast()
  const [members, setMembers] = useState<Array<Member>>([])

  async function getMembers(): Promise<void> {
    const res = await fetch("/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.status === 404) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "There was a problem with your request",
        action: (
          <ToastAction altText="Try again">
            <Button onClick={getMembers}>Try Again</Button>
          </ToastAction>
        ),
      })
      return
    }
    if (res.status !== 200) {
      toast({
        variant: "destructive",
        title: "Fetch members failed",
        description: res.text(),
      })
      return
    }
    const data = await res.json()
    setMembers(data)
    return
  }

  useEffect(() => {
    // setMembers(testMemberData);
    getMembers()
  }, [])

  return (
    <>
      <div className="flex flex-row">
        <h1 className="p-8 text-3xl font-bold">Members</h1>
      </div>
      <div className="mx-5 py-10">
        <DataTable columns={columns} data={members} />
      </div>
    </>
  )
}
