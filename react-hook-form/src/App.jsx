import React from "react"
import { useForm } from "react-hook-form"
import './App.css'


function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call simulate 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }
  

  return (
  <form onSubmit={handleSubmit(onSubmit)} >
  
    <div className="form-container">
      <label> First Name</label>
      <input
      className={errors.firstName ? 'input-error' : ""}
      {...register('firstName',
         {
          pattern:{
            value: /^[A-Za-z]+$/i ,
            message:"Last Name is not as per the rules"
          } ,
           required: true,
           minLength:{value:3, message:'min length atleast 3'},
            maxLength:{value:6, message:'max length atleast 6'} })}/>
             {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
    </div>
    <br/>
     <div className="form-container">
      <label> Middle Name</label>
      <input {...register('middleName',
         {
          pattern:{
            value: /^[A-Za-z]+$/i ,
            message:"Last Name is not as per the rules"
          } ,
           required: true,
           minLength:{value:3, message:'min length atleast 3'},
            maxLength:{value:6, message:'max length atleast 6'} })}/>
             {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
    </div>
    <br/>
     <div className="form-container">
      <label> Last Name:</label>
      <input {...register('lastName',
         {
          pattern:{
            value: /^[A-Za-z]+$/i ,
            message:"Last Name is not as per the rules"
          } 
          })}/>
          {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
    </div>
    <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}
    
    />
  </form>

  )
}

export default App
