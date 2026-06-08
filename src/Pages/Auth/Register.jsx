import React from 'react'
import { useForm } from 'react-hook-form'

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegistration = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', { required : true})} className="input" placeholder="Email" />
          {errors.email?.type === "required" && (
            <p role="alert">Email name is required</p>
          )}
          <label className="label">Password</label>
          <input type="password" {...register('password', { required : true})} className="input" placeholder="Password" />
          {
            errors.password?.type === 'required' && (<p role='alert'>Password is required</p>)
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Register
