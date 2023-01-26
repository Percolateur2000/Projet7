import React from "react";
import CarteLogement from "./CarteLogement";
import "./home.css";

const Home = () => {
    return (
        <>
            <div className="Body">
                <p className="Body__header">Chez vous, partout et ailleurs</p>
            </div>
            <div>
                <section className="Body__CarteLogement">
                    <CarteLogement />
                </section>
            </div>
        </>
    );
};

export default Home;
