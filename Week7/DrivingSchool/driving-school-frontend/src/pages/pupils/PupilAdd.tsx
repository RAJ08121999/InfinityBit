"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {z} from "zod"

import { addPupil } from "@/lib/api";

import { pupilSchema } from "@/lib/pupilSchema";

import { PupilForm } from "@/components/PupilForm";


type PupilFormValues = z.infer<typeof pupilSchema>


const PupilAdd = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<PupilFormValues>({
    resolver: zodResolver(pupilSchema),
    defaultValues:{
      forename:"",
      surname:"",
      dob:"",
      gender:"Male",
      email:"",
      home:{ mobile: "", work: ""},
      pickupAddress: { postcode: "", houseNo: "", address: "" },
      homeAddress: { postcode: "", houseNo: "", address: "" },
      licenseType:"No License",
      allowTextMessaging: false,
      passedTheory: false,
      fott: false,
      fullAccess: false,
      pupilCaution: false,
      discount: "0%",
    },
    
   });
    
  const mutation = useMutation({
    mutationFn: (values: PupilFormValues) =>addPupil(values),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey:["pupils"]});
      form.reset({
        forename: "",
        surname: "",
        dob: "",
        gender: "Male",
        email: "",
        home: { mobile: "", work: "" },
        pickupAddress: { postcode: "", houseNo: "", address: "" },
        homeAddress: { postcode: "", houseNo: "", address: "" },
        licenseType: "No License",
        allowTextMessaging: false,
        passedTheory: false,
        fott: false,
        fullAccess: false,
        pupilCaution: false,
        discount: "0%",
      });
      navigate({ to : "/pupils"});
    },
    onError:(err:any)=>{
      console.error("Mutation error:", err);
      console.error("Backend response:", err.response?.data);
    }
  });

  function onSubmit(values: PupilFormValues){
    console.log("Submitting pupil",values)
    mutation.mutate(values)
  }


  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Add New Pupil</h1>

      <PupilForm
        form={form}
        onSubmit={onSubmit}
        isPending={mutation.isPending}
        buttonLabel="Add Pupil"
      />
    </div>
  )
}

export default PupilAdd
