
import { CiLocationOn } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const navLink = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/shop"}>Shop</NavLink></li>
        {/* <li><NavLink to={"/pages"}>Pages</NavLink></li> */}
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>

    </>


    return (
        <div>
            {/* Top Header  bg-[#333333]*/}

            <div className=' text-[#666666] text-xs p-4'>
                <div className='flex flex-col items-center justify-between mx-auto all-container md:flex-row'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn />
                        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <select className='p-1 bg-transparent border-none outline-none' name="" id="">
                            <option value="">Eng</option>
                            <option value="">Ban</option>
                        </select>
                        <select className='p-1 bg-transparent border-none outline-none' name="" id="">
                            <option value="">USD</option>
                            <option value="">Tka</option>

                        </select>
                        <span>
                            |
                        </span>
                        <Link to='/login'>
                            Sign In
                        </Link>
                        <span>/</span>
                        <Link to='/register'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>


            {/* Middle nav bar */}
            <div className='py-2 border-y'>
                <div className="mx-auto navbar all-container">
                    <div className="navbar-start">
                        <h2 className="flex items-center gap-2 text-3xl font-semibold"><img src="/fav.png" alt="" /> Echo Shop</h2>
                    </div>
                    <div className="hidden navbar-center lg:flex">
                        <label className="flex items-center gap-2 input input-bordered">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center gap-3 text-2xl'>
                            <Link to="/wishList">
                                <IoMdHeartEmpty className='cursor-pointer' />
                            </Link>
                            <span>|</span>
                            <div className='flex items-center gap-4'>
                                <div className='relative cursor-pointer'>

                                    <Link to="/shopping-cart">
                                        <SlHandbag />
                                    </Link>
                                    <div className='absolute text-sm -top-2 -right-2 z-10 bg-[#00B207] rounded-full size-5 text-white flex justify-center items-center'>5</div>
                                </div>
                                <div className='text-xs'>
                                    <p>Shopping cart</p>
                                    <h3 className='text-base font-semibold'>$ 574.20</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* End Nav bar */}

            <div className='bg-[#333333] text-[#999999]'>
                <div className="mx-auto navbar all-container">
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLink}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden navbar-start lg:flex">
                        <ul className="px-1 menu menu-horizontal">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center gap-2 text-white'>
                            <LuPhoneCall className='text-2xl' />
                            <p>(+880) 17XXX</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;