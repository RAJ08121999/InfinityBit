import { useForm } from "react-hook-form"
import "./App.css"

export default function App() {

  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm()
  const onSubmit = async (data) => {
    //api call simulation
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("submitting the form",data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>First Name</label>
      <input
        className={errors.firstName ? 'input-error' : "" }
        {...register("firstName", 
        {
          required:true,
          minLength:{value:2, message:"Min len atleast 2"},
          maxLength:10,
        }
        )} placeholder="enter first name" />
      {errors.firstName && <p className="err-msg">{errors.firstName.message}</p>}
      <br/>

      <label>Last Name</label>
      <input 
      className={errors.firstName ? 'input-error' : "" }
      {...register("lastName", 
        {
          required:true,
          minLength:3,
          maxLength:10,
          pattern:{
            value:/^[A-Za-z]+$/i ,
            message:"last name is not as per rules"
          }
        }
      )}placeholder="enter last name" />
      {errors.lastName && <p className="err-msg">{errors.lastName.message}</p>}
      <br/>

      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"} />
    </form>
  )
}