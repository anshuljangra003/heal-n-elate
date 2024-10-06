"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input" // Make sure the import path is correct
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Define the form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

// Define the submit handler
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

export function ProfileForm() {
  // Initialize the form with useForm hook and zodResolver for validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "", // Default value for the form fields
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default function FormPage() {
    return (
      <div className="container">
        <h1>Profile Form</h1>
        <ProfileForm />
      </div>
    )
  }