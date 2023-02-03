import React, { useState } from "react";
import "@/pages/APropos/apropos.css";
import apropos from "@/images/apropos.png";
import arrow from "@/images/arrow.png";

let titre1 = `Fiabilité`;
let detail1 = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les
photos sont conformes aux logements, et toutes les informations sont
régulièrement vérifiées par nos équipes.`;

let titre2 = `Respect`;
let detail2 = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
comportement discriminatoire ou de perturbation du voisinage
entraînera une exclusion de notre plateforme.`;

let titre3 = `Service`;
let detail3 = `Nos équipes se tiennent à votre disposition pour vous fournir une
expérience parfaite. N'hésitez pas à nous contacter si vous avez la
moindre question.`;

let titre4 = `Sécurité`;
let detail4 = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
pour les voyageurs, chaque logement correspond aux critères de
sécurité établis par nos services. En laissant une note aussi bien à
l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
les standards sont bien respectés. Nous organisons également des
ateliers sur la sécurité domestique pour nos hôtes.`;

const Detail = ({ titre, texte }) => {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state);
    };
    if (state === true) {
        return (
            <section>
                <div className="apropos__header" onClick={handleClick}>
                    <p>{titre}</p>
                    <img src={`${arrow}`} alt="arrow" />
                </div>
                <p className="apropos__text">{texte}</p>
            </section>
        );
    } else {
        return (
            <section>
                <div className="apropos__header" onClick={handleClick}>
                    <p>{titre}</p>
                    <img src={`${arrow}`} alt="arrow" />
                </div>
            </section>
        );
    }
};

const APropos = () => {
    return (
        <div className="apropos">
            <img
                className="apropos__img"
                src={`${apropos}`}
                alt="illustration"
            />
            <Detail titre={`${titre1}`} texte={`${detail1}`} />
            <Detail titre={`${titre2}`} texte={`${detail2}`} />
            <Detail titre={`${titre3}`} texte={`${detail3}`} />
            <Detail titre={`${titre4}`} texte={`${detail4}`} />
        </div>
    );
};

export default APropos;
