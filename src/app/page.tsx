'use client'

import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/icons/logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSearchParams} from "next/navigation";
import {useToast} from "@/components/ui/use-toast";
import {Loader2} from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(1).trim(),
  password: z.string().min(5).max(70).trim()
})

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const redirectUri = searchParams.get("redirect_uri")
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsDisabled(true)
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: values.username, password: values.password })
    })

    if (res.status === 401) {
      toast({
        variant: "destructive",
        title: "Login failed.",
        description: "Username or password incorrect.",
      })
      setIsDisabled(false)
      return
    }
    if (res.status !== 200) {
      toast({
        variant: "destructive",
        title: "Login failed.",
        description: res.text()
      })
      setIsDisabled(false)
      return
    }
    toast({
      title: "Login succeeded.",
      description: "You will be redirected to previous page in a while."
    })
    const data = await res.json()
    setIsDisabled(false)
    document.cookie = `ip_sso_token=${data.token}`
    if (redirectUri !== null) {
      window.location.href = redirectUri
    }
  }

  return (
    <>
      <header className="top-0 m-2 w-full h-14 flex flex-row items-center space-x-3">
        <Logo className="w-20 h-20 pl-6" fill="fill-primary"></Logo>
        <h1 className="text-xl font-bold">IronPulse SSO</h1>
        <ModeToggle></ModeToggle>
      </header>
      <main>
        <Card className="w-[350px] lg:w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Sign in through your IronPulse ID</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isDisabled}>
                  {isDisabled ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
