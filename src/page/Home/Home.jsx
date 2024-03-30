import React, { useState } from 'react';

const Home = () => { 
  const [formData,setFormData]=useState({
    email:'',
    password:'',

  })

 const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevValue)=>({
        ...prevValue,
        [name]:value
    }))
 }

 console.log(formData);



 const handleFormSubmit=(e)=>{
     e.preventDefault()
   
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })

    .then(res=>res.json())
    .then(result=>console.log(result))
    

  

 }

 
    return (
        <div className='flex flex-col justify-center items-center '>
           <h2 className='text-3xl'>Login page</h2>  
           <form onSubmit={handleFormSubmit} className='w-2/5' action="">
          <div className='space-y-4 '>
          <div>
           <label htmlFor="email"></label>
           <input onChange={handleChange} className='border border-gray-300 py-2 px-4  w-full  rounded-md' value={formData.email} name='email' id='name' type="text" placeholder='Enter your name' />
           </div>

            <div>
            <label htmlFor="password"></label>
            <input onChange={handleChange} className='border border-gray-300 py-2 px-4  w-full  rounded-md' value={formData.password} name='password' id='password' type="password" placeholder='Enter your name' />
            </div>

              <button type='submit' className='px-12 w-full rounded-md bg-black text-white  py-2 '>Submit </button>
          </div>
           </form>

        </div>
    );
};

export default Home;