import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;