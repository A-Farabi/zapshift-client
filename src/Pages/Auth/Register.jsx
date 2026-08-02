import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';
import axios from 'axios';

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth()

  const handleRegistration = (data) => {

    const profileImg = data.image[0]

    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user)

        const formData = new FormData()
        formData.append('image', profileImg)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Hosting_Key}`, formData)
          .then(res => {
            console.log(res.data.data.url)

            // updating user
            const updateProfile = {
              displayName: data.name,
              dispayUrl: res.data.data.url
            }
updateUserProfile(updateProfile)
            .then()
            .catch(err => alert(err.message))
          })

      })
      .catch(error => {
        console.log(error.message)
      })
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
          {errors.email?.type === "required" && (
            <p role="alert">Email name is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            })}
            //need to work in pass str:
            className="input"
            placeholder="Password"
          />
          {
            errors.password?.type === 'required' && (<p role='alert'>Password is required</p>)
          }
          {
            errors.password?.type === 'pattern' && (<p className='text-red-500'>password must have one uppercase, smallercase,  special character.</p>)
          }
          <lebel>Photo</lebel>
          <input type="file" accept='image/*' {...register('image', { required: true, })} className="file-input" placeholder="Upload your photo" />
          {
            errors.image?.type === "required" && (<p className='text-red-500'>Image required</p>)
          }
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <div>
        <h3>Already have an account? <Link to="/login" className='text-green-700'>Login</Link></h3>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  )
}

export default Register
