"use client";

import { useEffect, useState } from "react";
import { baseurl, testMemberData } from "../../../lib/test-data";
import { columns, Member } from "./columns";
import { DataTable } from "../../../components/data-table";
import { Button } from "../../../components/ui/button";
import { Island_Moments } from "next/font/google";

export default function Members() {
  const [members, setMembers] = useState<Array<Member>>([]);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getMembers(): Promise<void> {
    try {
      const response = await fetch(baseurl + "/admin/users");
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const data = await response.json();
      setMembers(data);
      setFetchError(false);
    } catch (error) {
      setFetchError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // setMembers(testMemberData);
    getMembers();
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <h1 className="p-8 text-3xl font-bold">Members</h1>
      </div>
      <div className="mx-5 py-10">
        {fetchError ? (
          <div className="mx-auto flex w-max justify-center flex-col">
            <h1>Failed to fetch users.</h1>
            <Button onClick={getMembers} className="mx-auto">
              Try Again
            </Button>
          </div>
        ) : (
          <DataTable columns={columns} data={members} />
        )}
      </div>
    </>
  );
}
