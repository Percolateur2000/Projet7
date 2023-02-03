import React from "react";
import { useParams } from "react-router-dom";

const FicheLogement = () => {
    let { id } = useParams();
    return <div className="logement">{id}</div>;
};

export default FicheLogement;
