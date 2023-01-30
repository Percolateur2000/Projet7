import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getApi from "@/components/api/getApi";
import FicheLogement from "./FicheLogement";
import "./logement.css";

let logements = getApi();

const Logement = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        if (
            !logements.some((logements) => {
                return logements.id === id;
            })
        ) {
            navigate("/PageIntrouvable");
        }
    });

    return (
        <>
            <FicheLogement />
        </>
    );
};

export default Logement;
