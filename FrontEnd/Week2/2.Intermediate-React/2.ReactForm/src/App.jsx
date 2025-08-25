import React, { useState } from 'react'

const App = () => {
  const[formData , setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",streetAddress:"", city:"",state:"",postalCode:"",
    comments:false,candidates:false,offers:false,pushNotifications:""
  })

  function changeHandler(event){
    const { name , value ,checked,type} = event.target;
    setFormData( (prev)=>({
      ...prev,[name]:type ==='checkbox'?checked : value
    })
    )
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("the entire form data");
    console.log(formData)
  }

  return (
    <div className='flex flex-col items-center w-full'>

      <form onSubmit={submitHandler}>

        <label htmlFor='firstName' className='text-xl leading-5 '>First Name</label>
        <br/>
        <input
          type='text'
          placeholder='Enter Your First Name'
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />

        <br/>
        <label htmlFor='lastName'className='text-xl leading-5 mt-2'>Last Name</label>
        <br/>
        <input
          type='text'
          placeholder='Enter Your Last Name'
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />
        
        <br/>
        <label htmlFor='lastName' className='text-xl leading-5 mt-2'>Email Address </label>
        <br/>
        <input
          type='email'
          placeholder='Enter Your Email'
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />

        <br/>
        <label htmlFor='country'className='text-xl leading-5 mt-2'>Country</label>
        <br/>
        <select
        id='country'
        value={formData.country}
        name='country'
        onChange={changeHandler}
        className=' border-blue-400 border-2 w-full rounded-md mt-2'

        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Maxico</option>
          <option>Russia</option>
        </select>

        <br/>
        <label htmlFor='streetAddress'className='text-xl leading-5 mt-2'>Street Address </label>
        <br/>
        <input
          type='text'
          placeholder='Enter Your Street Address'
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />

        <br/>
        <label htmlFor='city'className='text-xl leading-5 mt-2'>Enter Your City Name </label>
        <br/>
        <input
          type='text'
          placeholder='Enter Your city Address'
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />

        <br/>
        <label htmlFor='state'className='text-xl leading-5 mt-2'>Enter Your State Name </label>
        <br/>
        <input
          type='text'
          placeholder='Enter Your state Name'
          name="state"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />

        <br/>
        <label htmlFor='postalCode'className='text-xl leading-5 mt-2'>Enter Your Postal Code </label>
        <br/>
        <input
          type='number'
          placeholder='723101'
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className=' border-blue-400 border-2 w-full rounded-md mt-2'
        />

        <br/>
        <br/>
        <fieldset>

          <legend className='text-xl mt-2'>By Email</legend>

          <div className='flex items-start gap-3'>

            <input
              id='comments'
              name='comments'
              type='checkbox'
              checked={formData.comments}
              onChange={changeHandler}
              className='mt-3'
            />

            <div>

              <label htmlFor='comments'className='text-xl'>
                Comments
              </label>
              <p className='text-xl'>Get notified when someone posts a comment on a posting.</p>
            </div>

          </div>

          <div className='flex items-start gap-3 '>

            <input
              id='candidates'
              name='candidates'
              type='checkbox'
              checked={formData.candidates}
              onChange={changeHandler}
              className='mt-3'
            />

            <div>
              <label htmlFor='candidates' className='text-xl'>Candidates</label>

              <p className='text-xl'>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <input
              id='offers'
              name='offers'
              type='checkbox'
              checked={formData.offers}
              onChange={changeHandler}
              className='mt-3'
            />

            <div>

              <label htmlFor='offers'className='text-xl'>Offers</label>
              <p className='text-xl'>Get notified when a candidate 
              accepts or rejects an offer.</p>
            
            </div>

          </div>

        </fieldset>

        
        <br/>
        <fieldset className='text-xl mt-2'>

          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotifications'
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor='pushEverything'>Everything</label>

          <br/>
          <input
            type='radio'
            id='pushEmail'
            name='pushNotifications'
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor='pushEmail'>Same as email</label>

          <br/>
          <input
            type='radio'
            id='pushNothing'
            name='pushNotifications'
            value="No push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor='pushNothing'>No push Notifications</label>

        </fieldset>

        <button className='bg-blue-600 text-white font-bold rounded-md  px-4 py-2'>Save</button>

        
      </form>
    </div>
  )
}

export default App
