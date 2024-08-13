import { IoHomeOutline } from "react-icons/io5";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
 


const Nav_Banner = ({name,path,nameS,pathS = null}) => {
    console.log(name);
    return (
        <div className="h-24 navbanner text-white">
            <div className="all-container mx-auto flex items-center h-full px-4 md:p-0">
                
                <p className="flex items-center gap-1 "> <Link to='/'><IoHomeOutline className="text-lg text-[#808080] -mt-1" /></Link>
                 <Link to={path} className="text-[#00B207] text-base flex items-center gap-1"><LiaGreaterThanSolid className="text-[#808080]" /> {name}</Link>
                <Link   to={pathS} className={pathS == null ? 'hidden ' : 'text-[#00b207] text-base flex items-center gap-1'}><LiaGreaterThanSolid className="text-[#808080]" /> {nameS} </Link> 
                </p>
            </div>
        </div>
    );
};

export default Nav_Banner;