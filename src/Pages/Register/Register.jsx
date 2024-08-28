import { useForm } from "react-hook-form";
import Nav_Banner from "../../Shared/Nav-Banner/Nav_Banner";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [cShowPass, setCShowPass] = useState(false);
    const {createUser} = useAuth()
    const { register, handleSubmit,watch, reset, formState: { errors } } = useForm();
    const password = watch('password')
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        console.log(data);

        createUser(data.email,data.password)
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
            {/* Navigator Banner */}
            <div>
                <Nav_Banner name='Account' nameS='Create Account' pathS='/register' Link="/login"></Nav_Banner>
            </div>
            {/* End Navigator Banner */}
            <div className="flex justify-center items-center min-h-[500px] pop">
                <div className="p-5 w-full md:w-[400px] shadow rounded-2xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold pop">Create Account</h1>
                    </div>
                    <div className="pop mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <input className="px-2 py-2 w-full border border-gray-300 rounded-lg" name="email" placeholder="Email" type="email" {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-500 mt-2'>This field is required</span>}
                            </div>
                            <div className="relative">
                                <input className="px-2 py-2 w-full border border-gray-300 rounded-lg" name="password" placeholder="Password" type={showPass ? "text" : "password"} {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, minLength: 6, maxLength: 20 })} />
                                <span className="absolute top-1/3 right-4" onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>
                            {errors.password?.type === 'required' && <span className='text-red-500 mt-2'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Password must be within 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 mt-2'>Password must have one uppercase, one lowercase, one number, and one special character</span>}
                            <div className="relative">
                <input
                    className="px-2 py-2 w-full border border-gray-300 rounded-lg"
                    name="Cpassword"
                    placeholder="Confirm Password"
                    type={cShowPass ? "text" : "password"}
                    {...register("Cpassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                            value === password || "Passwords do not match"
                    })}
                />
                <span className="absolute top-1/3 right-4" onClick={() => setCShowPass(!cShowPass)}>
                    {cShowPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </span>
            </div>
            {errors.Cpassword && <span className="text-red-500">{errors.Cpassword.message}</span>}
                             
                            <div>
                                <span className="flex items-center ml-1"><input className="mr-1 w-3 h-3" type="checkbox" name="check" {...register("check", { required: true })} /><span className="text-sm text-gray-600">Accept all terms & Conditions</span></span>
                                {errors.check?.type === 'required' && <span className='text-red-500 mt-2'>This field is required</span>}
                            </div>
                            <div className="space-y-4">
                                <input type="submit" value='Sign up' className="btn w-full bg-[#00B207] rounded-full text-white" />
                                <p className="text-base text-center text-gray-600 cursor-pointer">Already have an account? <Link to='/login' className="text-gray-900">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;