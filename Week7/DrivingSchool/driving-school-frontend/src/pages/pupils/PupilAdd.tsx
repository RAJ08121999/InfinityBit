"use client"
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { addPupil } from "@/lib/api";

//zod schema

const pupilSchema = z
  .object({
    forename:
    z.string()
    .min(2,"First name is required")
    .max(50,"firstname can't exceed 50 characters"),

    surname:
    z.string()
    .min(3,"Last name is required")
    .max(50,"lastname can't exceed 50 characters"),

    dob:
    z.string()
    .refine((val)=> !isNaN(Date.parse(val)),{message:"Invalid Date"}),

    gender:
    z.enum(["Male","Female","Other"],{
    errorMap:()=> ({message:"Gender must be Male , Female or Others "}),
  }),

    email:
    z.string().
    email("Invalid email address")
    .optional()
    .or(z.literal("")),

    home: 
    z.object({
      mobile:
        z.string()
        .regex(/^\+?\d{1,4}?[\s.-]?\(?\d{1,5}?\)?[\s.-]?\d{1,5}[\s.-]?\d{1,9}$/
        , "Invalid mobile number format")
        .optional().or(z.literal("")),
      work:
        z.string()
        .regex(/^\+?\d{1,4}?[\s.-]?\(?\d{1,5}?\)?[\s.-]?\d{1,5}[\s.-]?\d{1,9}$/
        , "Invalid work number format")
        .optional().or(z.literal("")),
  })
  .optional(),
  licenseType:
    z.enum(["No License","Provisional","Full License"])
    .optional()
    .default("No License"),
});

type PupilFormValues = z.infer<typeof pupilSchema>


const PupilAdd = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const form = useForm<PupilFormValues>({
    resolver: zodResolver(pupilSchema),
    defaultValues:{
      forename:"",
      surname:"",
      dob:"",
      gender:"Male",
      email:"",
      home:{ mobile: "", work: ""},
      licenseType:"No License",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: PupilFormValues) =>addPupil(values),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey:["pupils"]});
      form.reset(
        {
          forename: "",
          surname: "",
          dob: "",
          gender: "Male",
          email: "",
          home: { mobile: "", work: "" },
          licenseType: "No License",
        }
      );
      // navigate({ to : "/pupils"});
    },
  });

  function onSubmit(values: PupilFormValues){
    mutation.mutate(values)
  }


  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">Add New Pupil</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* First Name */}

        <FormField
          control={form.control}
          name="forename"
          render={({ field })=>(
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter first name" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        {/* Last Name */}

        <FormField
          control={form.control}
          name="surname"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter last name" {...field}/>
              </FormControl>
              <FormMessage/>
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
              <FormControl>
                <select {...field} className="input">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}

        <FormField
          control={form.control}
          name="email"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        {/* Mobile Number*/}

        <FormField
          control={form.control}
          name="home.mobile"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type= "tel" placeholder="Enter mobile number" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

          {/* Work number */}

        <FormField
          control={form.control}
          name="home.work"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Work Number</FormLabel>
              <FormControl>
                <Input type= "tel" placeholder="Enter work number" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        {/* License Type */}

        <FormField
          control={form.control}
          name="licenseType"
          render={({ field })=>(
            <FormItem>
              <FormLabel>License Type </FormLabel>
              <FormControl>
                <select {...field} className="input">
                  <option value="No License">No License</option>
                  <option value="Provisional">Provisional</option>
                  <option value="Full License">Full License</option>
                </select>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        {/* Submit Button */}

        <Button type="submit" disabled={mutation.isPending}     className="w-full">
          {mutation.isPending ? "Adding..." : "Add Pupil"}
        </Button>

        </form>
      </Form>
    </div>
  )
}

export default PupilAdd
