import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

 

const NewsLetter = () => {
    return (
        <div className="bg-[#F7F7F7] min-h-40 mt-10">
            <div className="all-container mx-auto flex justify-between items-center min-h-40 p-4 md:p-2  flex-wrap">
                <div className="w-[450px] mb-4 md:mb-0">
                    <h1 className="text-[#1A1A1A] font-bold text-2xl">Subscribe our Newsletter</h1>
                    <p className="text-[#999] text-sm">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="flex items-center gap-5 grow max-[510px]:flex-wrap max-[950px]:justify-start">
                    <div className="md:w-4/5 w-full h-10 flex items-center min-[951px]:justify-end  justify-start max-[950px]:justify-start  ">
                        <input className="border-none outline-none h-full md:w-3/5 w-11/12 rounded-full pl-6" type="email" />
                        <button className="btn  rounded-full text-white bg-[#00B207] md:px-6 text-lg px-4 -ml-6 "  >Subscribe</button>
                    </div>
                    <div className="flex items-center gap-5 text-2xl">
                    <FaFacebook className="hover:text-[#00B207]" />
                    <FaTwitter className="hover:text-[#00B207]" />
                    <FaPinterestP className="hover:text-[#00B207]" />
                    <FaInstagram className="hover:text-[#00B207]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;