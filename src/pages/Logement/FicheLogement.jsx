import React from "react";
import { useParams } from "react-router-dom";

const FicheLogement = () => {
    let { id } = useParams();
    return <div>{id}</div>;
};

export default FicheLogement;
