import React from "react";
import "./home.css";
import getApi from "@/components/api/getApi";
import { Link } from "react-router-dom";

let logements = getApi();

let testApi = () => {
    console.log(logements);
};

const Home = () => {
    return (
        <>
            <div className="Body">
                <p className="Body__header">Chez vous, partout et ailleurs</p>
            </div>
            <div>
                <section className="Body__CarteLogement">
                    <Link onClick={testApi}>Test de l'api</Link>
                    <Link to="/logement/1">logement/1</Link>
                    <Link to="/logement">logement error</Link>
                </section>
            </div>
        </>
    );
};

export default Home;
