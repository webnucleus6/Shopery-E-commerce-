import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Map from "./Map";

const ContactPage = () => {
    return (
        <div className="bg-slate-50 all-container mx-Auto">
            <div className="flex flex-col items-start justify-between gap-3 p-10 lg:flex-row lg:gap-10">
                <div className="">
                <div className="flex flex-col items-center justify-center flex-1 p-10 bg-white shadow-lg ">
                        <span >
                            < CiLocationOn className="text-4xl text-green-500 border-b-2 border-green-500" />
                        </span>
                        <p>27|5 Ash Dr. San jose, South</p>
                        <p>Dako ta *3475</p>
                    </div>
                <div className="flex flex-col items-center justify-center flex-1 p-10 bg-white border shadow-lg ">
                        <span >
                        <BsEnvelope className="text-4xl text-green-500 " />
                        </span>
                        <p>27|5 Ash Dr. San jose, South</p>
                        <p>Dako ta *3475</p>
                    </div>
                <div className="flex flex-col items-center justify-center flex-1 p-10 bg-white shadow-lg ">
                        <span >
                        <MdOutlineWifiCalling3 className="text-4xl text-green-500 " />
                        </span>
                        <p>27|5 Ash Dr. San jose, South</p>
                        <p>Dako ta *3475</p>
                    </div>
                </div>
                <div className="flex-1 p-3 bg-white shadow-lg lg:p-10">
                    <h1 className="mb-10 text-4xl font-bold">Just Say Hello!</h1>
                    <p>Do you fancy saying hi to me or you want to get started with your </p>
                    <p>Project and you need my help ? feel to contact me</p>
                    <div className="my-6">
                        <form action="">

                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="phone" className="text-sm read-only:"></label>
                                    <input id="phone" type="text" placeholder="Template coking<" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="email" placeholder="gmail@gmail.com" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full ">
                                    <label htmlFor="email" className="text-sm"></label>
                                    <input id="email" type="email" placeholder="Hello !" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full ">
                                    <label htmlFor="order-notes" className="text-sm"></label>
                                    <textarea id="order-notes" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <button className="text-white bg-green-500 rounded-full btn">Send Message</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Map/>
        </div>


    );
};

export default ContactPage;
