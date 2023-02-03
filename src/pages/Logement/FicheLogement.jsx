import React from "react";
import MenuDeroulant from "../../components/MenuDeroulant";
import getApi from "../../components/api/getApi";

let logements = getApi();

let menu = `logement__global`;
let header = `logement__menus__titre`;
let paragraphe = `logement__menus__desc`;

const photos = logements[0].pictures;
const title = logements[0].title;
const name = logements[0].host.name;
const picture = logements[0].host.picture;
const tags = logements[0].tags;
const ratings = logements[0].ratings;
const description = logements[0].description;
const equipments = logements[0].equipments;

const FicheLogement = () => {
    return (
        <section className="logement">
            <div>
                <img src={`${photos[0]}`} alt="Photos d'interieur" />
            </div>
            <div className="logement__presentation">
                <div>{title}</div>
                <div className="logement__host">
                    {name}
                    <img src={picture} alt={`Portrait de ${name}`} />
                </div>
                <div className="logement__misc">
                    <div>{tags}</div>
                    <div>{ratings}</div>
                </div>
                <div className="logement__menus">
                    <MenuDeroulant
                        menu={`${menu}`}
                        titre={"Description"}
                        texte={`${description}`}
                        header={`${header}`}
                        paragraphe={`${paragraphe}`}
                    />
                    <MenuDeroulant
                        menu={`${menu}`}
                        titre={"Équipements"}
                        texte={`${equipments}`}
                        header={`${header}`}
                        paragraphe={`${paragraphe}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default FicheLogement;
