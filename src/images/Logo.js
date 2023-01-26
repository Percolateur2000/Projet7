import img1 from "@/images/logo1.svg";
import img2 from "@/images/logo2.svg";
import img3 from "@/images/logo3.svg";
import img4 from "@/images/logo4.svg";

const Logo = () => {
    return (
        <>
            <div className="Logo">
                <img src={img1} alt="Logo" />
                <img src={img2} alt="Logo" />
                <img src={img3} alt="Logo" />
                <img src={img4} alt="Logo" />
            </div>
        </>
    );
};

export default Logo;
