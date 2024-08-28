 
import { useState } from "react";
import Nav_Banner from "../../Shared/Nav-Banner/Nav_Banner";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

 

const LogIn = () => {
    const [showPass,setShowPass] = useState(false)
    const {signIN} = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        signIN(data.email,data.password)
        .then(result => {
            console.log(result);
            reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Register Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
          
          navigate('/');
        })
        .catch(error =>
          {
            console.log(error);
          }
        )
    };
    return (
        <div>
            <div>
                <div>
                    <Nav_Banner name='Sign In' Link="/login"></Nav_Banner>
                </div>
                <div className="flex justify-center items-center min-h-[500px] pop">
                <div className="p-5 w-full md:w-[400px] shadow rounded-2xl">
                   <div className="text-center">
                    <h1 className="text-3xl font-semibold pop">Sign In</h1>
                    </div> 
                    <div className="pop mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                            <input className="px-2 py-2 w-full border border-gray-300 rounded-lg " placeholder="Email" name='email' type="email" {...register("email", { required: true })}  />
                            </div>
                            {errors.email && <span className='text-red-500 mt-2'>This field is required</span>}
                            <div className="relative">
                            <input className="px-2 py-2 w-full border border-gray-300 rounded-lg " placeholder="Password" type={showPass ? "text": "password"} {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, minLength: 6, maxLength: 20 })} name="password" />
                            <span className="absolute top-1/3 right-4" onClick={()=>setShowPass(!showPass)} >
                                {
                                    showPass ? <IoEyeOffOutline />   : <IoEyeOutline />
                                }
                            </span>
                            </div>
                            {errors.password?.type === 'required' && <span className='text-red-500 mt-2'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Password must be within 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 mt-2'>Password must have one uppercase, one lowercase, one number, and one special character</span>}
                            <div className="flex justify-between">
                                <span className="flex justify-center items-center "><input className="mr-1 w-3 h-3" type="checkbox" name="" id="remember" required /><span id="remember" className="text-sm text-gray-600 ">
                                    Remember me</span></span>
                                <span className="text-sm text-gray-600">Forget Password</span>
                            </div>
                            <div className="space-y-4">
                                <input type="submit" className="btn w-full bg-[#00B207] rounded-full text-white" value='Login'/>  
                                <p className="text-base text-center text-gray-600">Don’t have account?<Link to='/register' className="text-gray-900"> Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;