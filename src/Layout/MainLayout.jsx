import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/NavBar";
import NewsLetter from "../Shared/NewsLetter/NewsLetter";


const MainLayout = () => {
    return (
        <div>
            <NavBar />

            <Outlet />
            <NewsLetter></NewsLetter>
            <Footer />
        </div>
    );
};

export default MainLayout;
