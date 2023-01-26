import React from "react";
import "@/pages/Home/cartelogement.css";
import { Link } from "react-router-dom";

const CarteLogement = () => {
    return (
        <>
            <div>
                <Link to={"/logement/"}>Logement</Link>
                <Link to={"/logement/1"}>Logement 1</Link>
            </div>
        </>
    );
};

export default CarteLogement;
