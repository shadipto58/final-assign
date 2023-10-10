import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const { userLogin, googleLogin } = useContext(AuthContext);

    const location = useLocation();
    //console.log(location);
    const navigate = useNavigate();
    //const from = location.state?.from?.pathname || '/';

    // EMAIL PASSWORD LOGIN
    const handleLogin = (data) => {
        //console.log(data);
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                //console.log(user);
                toast.success('User Login Successfull!');
                reset()
                //navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    // GOOGLE LOGIN 
    const handleGoogleLogin = (event) => {
        event.preventDefault()
        //console.log('clicked google');
        googleLogin()
            .then((result) => {
                const user = result.user;
                //console.log(user);
                toast.success('User Login Successfull!');
            }).catch((error) => {
                setLoginError(error.message)
            });
    }



    return (
        <div className='flex justify-center items-center my-32'>
            <div className='w-96  p-7 rounded-2xl shadow-xl'>
                <h2 className='text-xl text-center mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='' >
                    <div className="form-control w-full mt-4">
                        <label className="">Email</label>
                        <input {...register("email", { required: "Please enter your email" })} type="email" className="input input-bordered w-full" />
                        {errors.email && <label className='text-red-500'>{errors.email?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="">Password</label>
                        <input {...register("password", { required: "Please enter your password", minLength: { value: 6, message: "please enter atleast 6 charecters" } })} type="password" className="input input-bordered w-full" />
                        {errors.password && <label className='text-red-500'>{errors.password?.message}</label>}
                        <label className="text-[10px] mt-2">Forgot Password ?</label>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value='LOGIN' className="input input-bordered w-full bg-accent text-white cursor-pointer" />
                    </div>
                    <p className='text-xs my-[11px] text-center'>New to Doctors Portal?  <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    {
                        loginError && <p className='text-red-500'>{loginError}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;