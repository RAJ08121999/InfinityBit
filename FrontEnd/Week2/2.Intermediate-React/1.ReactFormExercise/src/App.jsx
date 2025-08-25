import React from 'react'
import { useState } from 'react';

const App = () => {

  // const [first, setFirst] = useState("");
  // const [last, setlast] = useState("");

  // console.log(first);
  // console.log(last);

  // function firstChangeHandler(event){
  //   // console.log(event.target.value)
  //   setFirst(event.target.value); 
  //   // user jo bhi inpute dega uska current value 'first' variable me store ho jayega
  // }

  // function lastChangeHandler(event){
  //   // console.log(event.target.value)
  //   setlast(event.target.value);
  //   // user jo bhi inpute dega uska current value variable 'last' me store ho jayega
  // }


  const [formData, setformData] = useState(  {firstName:"",lastName:"",email:"",comments:"",isVisible:true , mode:"" , country:""}  )

  function changeHandler(event){
    const {name , value , checked , type } = event.target
    setformData(prevFormData => {
      return{
        ...prevFormData,
        [name]:type==="checkbox"? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing entire form data");
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <input
          type='text'
          placeholder='First_name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br/>
        <br/>

        <input
          type='text'
          placeholder='Last_name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br/>
        <br/>

        <input
          type='email'
          placeholder='Email'
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br/>
        <br/>

        <textarea
          placeholder='enter your comments'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br/>
        <br/>

        <input
          type='checkbox'
          onChange={changeHandler}
          name="isVisible"

          // value={formData.isVisible} yaha value nahi checked ya unchecked use hota hai

          checked={formData.isVisible}
          id='isVisible'
        />
        <label
          htmlFor='isVisible'
        >is it Visible? </label>

        <br/>
        <br/>

        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode=== "Online-Mode"}
          // checked accepts boolean values
        />
        <label
          htmlFor='Online-Mode'
        >Online Mode </label>

        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode=== "Offline-Mode"}
        />
        <label
          htmlFor='Offline-Mode'
        >Offline Mode </label>
        <br/>

        <label
          htmlFor='country'
        >select Country</label>
        <select
        onChange={changeHandler}
        name="country"
        id='country'
        value={formData.country}
        > 

          <option value="india">india</option>
          <option value="pakistan">pakistan</option>
          <option value="afghanistan">afghanistan</option>
          <option value="tajakistan">tajakistan</option>
          <option value="bengladesh">bengladesh</option>

        </select>
        <br/>
        <br/>

        <button
        
        >Submit</button>

      </form>
    </div>
  )
}

export default App
