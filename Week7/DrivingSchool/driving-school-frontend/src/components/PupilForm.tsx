"use client";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type { PupilInput } from "@/lib/pupilType";
import { useForm } from "react-hook-form"

type PupilFormProps = {
  form: ReturnType<typeof useForm<PupilInput>>; 
  onSubmit: (values: PupilInput) => void; // submit handler
  isPending?: boolean; // for Add/Edit loading state
  buttonLabel: string;
  disableEmail?:boolean;
};

export function PupilForm({ form, onSubmit, isPending, buttonLabel , disableEmail}: PupilFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        
        {/* First Name */}
        <FormField
          control={form.control}
          name="forename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  disabled={disableEmail}
                  type="email" 
                  placeholder= {disableEmail ? "Email can not be edited " : "Enter your email"}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mobile */}
        <FormField
          control={form.control}
          name="home.mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Work */}
        <FormField
          control={form.control}
          name="home.work"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter work number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* License Type */}
        <FormField
          control={form.control}
          name="licenseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>License Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select license type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="No License">No License</SelectItem>
                  <SelectItem value="Provisional">Provisional</SelectItem>
                  <SelectItem value="Full License">Full License</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Saving..." : buttonLabel}
        </Button>
      </form>
    </Form>
  );
}
