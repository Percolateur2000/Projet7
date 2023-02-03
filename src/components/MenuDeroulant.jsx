import React, { useState } from "react";
import arrow from "@/images/arrow.png";

const MenuDeroulant = ({ menu, header, paragraphe, titre, texte }) => {
    const [state, setState] = useState(false);

    const arrowStyle = {
        transform: state ? "rotate(-180deg)" : "rotate(0deg)",
        transition: "transform 100ms ease-in-out",
    };

    const handleClick = () => {
        setState(!state);
    };

    if (state === true) {
        return (
            <div className={`${menu}`}>
                <div className={`${header}`} onClick={handleClick}>
                    <p>{titre}</p>
                    <img src={`${arrow}`} alt="arrow" style={arrowStyle} />
                </div>
                <p className={`${paragraphe}`}>{texte}</p>
            </div>
        );
    } else {
        return (
            <div className={`${menu}`}>
                <div className={`${header}`} onClick={handleClick}>
                    <p>{titre}</p>
                    <img src={`${arrow}`} alt="arrow" style={arrowStyle} />
                </div>
            </div>
        );
    }
};

export default MenuDeroulant;
