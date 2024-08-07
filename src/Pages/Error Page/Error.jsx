import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/Navbar/NavBar";
import N_Banner from "../../Shared/Navigator Banner/N_Banner";



const Error = () => {
    return (
        <div>
            <NavBar></NavBar>
            <N_Banner></N_Banner>
            <div>
                <div className="errorImg">
                    <img src="" alt="" />
                </div>
                <div className="content">

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;