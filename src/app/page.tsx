'use client'

import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/icons/logo";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
  ironpulseId: z.string().email(),
  password: z.string().min(5).max(70)
})

export default function Home() {
  const { theme } = useTheme()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ironpulseId: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <header className="top-0 m-2 w-full h-14 flex flex-row items-center space-x-3">
        <Logo className="w-20 h-20 pl-6" fill={theme === "light" ? "black" : "white"}></Logo>
        <h1 className="text-xl font-bold">IronPulse SSO</h1>
        <ModeToggle></ModeToggle>
      </header>
      <main>
        <Card className="w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Sign in through your IronPulse ID</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="ironpulseId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IronPulse ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your IronPulse ID" {...field} />
                      </FormControl>
                      <FormDescription>
                        This should be an email address.
                      </FormDescription>
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
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
