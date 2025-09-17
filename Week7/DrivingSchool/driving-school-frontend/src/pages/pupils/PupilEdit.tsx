"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useParams,useNavigate } from "@tanstack/react-router"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import axios from "axios"
import Spinner from "@/assets/Spinner"
import {z} from "zod"

import { pupilSchema} from "@/lib/pupilSchema"
// import type { Pupil } from "@/lib/pupilType"

import { PupilForm } from "@/components/PupilForm"

type PupilFormValues = z.infer<typeof pupilSchema>

const PupilEdit = () => {
  const {pupilId} = useParams({from: "/pupils/$pupilId/edit"})
  const navigate = useNavigate();
  const queryClient = useQueryClient();


const form = useForm<PupilFormValues>({
  resolver: zodResolver(pupilSchema),
  defaultValues: {
    forename:"",
    surname:"",
    email:"",
    dob:"",
    gender:"Male",
    home:{ mobile:"", work:"" },
    licenseType:"No License",
  },
});

const { data:pupil, isLoading} = useQuery({
  queryKey:["pupil",pupilId],
  queryFn:async () =>{
    const res = await axios.get(`http://localhost:3000/api/pupils/${id}`)
    return res.data;
  },
  onSuccess:(data)=>{
    form.reset({
      forename: data.forename,
      surname: data.surname,
      email: data.email,
      dob: data.dob,
      gender: data.gender,
      home: { mobile: data.home?.mobile || "", work: data.home?.work || "" },
      licenseType: data.licenseType,
    })
  },
});

const mutation = useMutation({
  mutationFn:async(values:PupilFormValues)=>{
    const res = await axios.put(`http://localhost:3000/api/pupils/${id}`,values)
    return res.data
  },
  onSuccess:()=>{
    queryClient.invalidateQueries({ queryKey:["pupils"]})
    navigate({to:"/pupils"})
  },

})

const onSubmit = (values: PupilFormValues) => {
  mutation.mutate(values)
}


if(isLoading) return <div><Spinner/></div>


  return(
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Pupil</h1>
      <PupilForm
        form={form}
        onSubmit={onSubmit}
        isPending={mutation.isPending}
        buttonLabel="Update Pupil"
      />
    </div>
  )
}

export default PupilEdit
