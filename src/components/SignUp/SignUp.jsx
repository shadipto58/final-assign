import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const { createUser, updateUser, setUser, googleLogin } = useContext(AuthContext);

    // const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.form?.pathname || '/login';

    const handleSignUp = (data) => {
        //console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Creation Successfull!');
                reset()
                //navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        savedUser(data.name, data.email);
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })

    }

    // STORE USER DATA
    const savedUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
            })
    }

    // GOOGLE LOGIN 
    const handleGoogleLogin = (event) => {
        event.preventDefault()
        //console.log('clicked google');
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('User Creation Successfull!');
            }).catch((error) => {
                setLoginError(error.message)
            });
    }


    return (
        <div className='flex justify-center items-center my-32'>
            <div className='w-96  p-7 rounded-2xl shadow-xl'>
                <h2 className='text-xl text-center mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} className='' >
                    <div className="form-control w-full ">
                        <label className="">Name</label>
                        <input {...register("name", { required: "Please enter your name" })} type="text" className="input input-bordered w-full" />
                        {errors.name && <label className='text-red-500'>{errors.name?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="">Email</label>
                        <input {...register("email", { required: "Please enter your email" })} type="email" className="input input-bordered w-full" />
                        {errors.email && <label className='text-red-500'>{errors.email?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="">Password</label>
                        <input {...register("password", { required: "Please enter your password", minLength: { value: 6, message: "please enter atleast 6 charecters" } })} type="password" className="input input-bordered w-full" />
                        {errors.password && <label className='text-red-500'>{errors.password?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value='SIGN UP' className="input input-bordered w-full bg-accent text-white cursor-pointer" />
                    </div>
                    <p className='text-xs my-[11px] text-center'>Already have an account?  <Link to='/login' className='text-secondary'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default SignUp; 