import React, { useContext } from 'react'
import loginpage from '../../assets/images/login/login.svg'
import facebook from '../../assets/images/login/facebook.svg'
import google from '../../assets/images/login/google.svg'
import linkedin from '../../assets/images/login/linkedin.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'
    const { userLogin, signInWithGoogle } = useContext(AuthContext)

    const handleUserLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
    
        userLogin(email, password)
            .then(result => {
                const user = result.user
                toast.success('Login Success!', {autoClose: '500'})
                const currentUser = {
                    email: user.email
                }
                // Get JWT Token
                fetch('https://genius-car.vercel.app/api/genius-car/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    // Local Storage is the easiest but not the best place to share JWT Token
                    localStorage.setItem('geniusCarToken', data.data)
                })
                navigate(from, { replace: true })
            })
            .catch(error => toast.error(error.message, {autoClose: '500'}))
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
                    <h3 className='text-theme-body text-center text-4xl font-semibold leading-10 mb-b-50'>Login</h3>
                    <form onSubmit={handleUserLogin} action="">
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
                                placeholder='Your password'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <button
                                className="block w-full py-4 text-xl leading-leading-30 font-semibold text-white bg-theme-default rounded-rounded-10"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className='text-center text-theme-body text-lg leading-leading-21 font-medium mb-b-30'>Or Sign In With</p>
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
                        Have an account? <Link to='/register' className='font-semibold text-theme-default'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login