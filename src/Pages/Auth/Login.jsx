import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/useAuth'
import { Link } from 'react-router-dom'
import SocialLogin from './SocialLogin/SocialLogin'

function Login() {

    const { register, handleSubmit } = useForm()
    const { signInUser } = useAuth()
    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" {...register("email")} className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" {...register("password")} className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <div>
                            <h3>Don't have any account? <Link to="/register" className='text-green-700'>Register</Link></h3>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
