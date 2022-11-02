import React, { useContext } from 'react'
import loginpage from '../../assets/images/login/login.svg'
import facebook from '../../assets/images/login/facebook.svg'
import google from '../../assets/images/login/google.svg'
import linkedin from '../../assets/images/login/linkedin.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'
    const { createUser, updateName, signInWithGoogle } = useContext(AuthContext)

    const handleUserCreate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                navigate('/')
                updateName(name)
                    .then(() => {
                        toast.success('User Created Successfully!', { autoClose: 500 })
                    })
                    .catch(error => {
                        toast.error(error.message, { autoClose: 500 })
                    })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 500 })
            })

    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='container mx-auto px-[15px] lg:px-0 mb-b-70 lg:mb-b-130'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div className='flex justify-center items-center'>
                    <img src={ loginpage } alt="" />
                </div>
                <div className='border border-[#D0D0D0] rounded-rounded-10 p-12 md:p-20'>
                    <h3 className='text-theme-body text-center text-4xl font-semibold leading-10 mb-b-50'>Sign Up</h3>
                    <form onSubmit={handleUserCreate} action="">
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="text"
                                name="name"
                                placeholder='Your Name'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="email"
                                name="email"
                                placeholder='Your Email'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="password"
                                name="password"
                                placeholder='Your Password'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <button
                                className="block w-full py-4 text-xl leading-leading-30 font-semibold text-white bg-theme-default rounded-rounded-10"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className='text-center text-theme-body text-lg leading-leading-21 font-medium mb-b-30'>Or Sign Up With</p>
                    <div className='flex justify-center items-center gap-4 mb-b-50'>
                        <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer'>
                            <img src={ facebook } alt="" />
                        </div>  
                        <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer'>
                            <img src={ linkedin } alt="" />
                        </div>  
                        <div onClick={handleGoogleSignin} className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer'>
                            <img src={ google } alt="" />
                        </div>     
                    </div>
                    <p className='text-lg font-normal text-theme-text text-center leading-leading-21'>
                        Have an account? <Link to='/login' className='font-semibold text-theme-default'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register