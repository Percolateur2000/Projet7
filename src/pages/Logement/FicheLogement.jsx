import { React, useEffect } from "react";
import MenuDeroulant from "../../components/MenuDeroulant";
import getApi from "../../components/api/getApi";
import { useParams } from "react-router-dom";
import Star from "../../components/Star";
import Carousel from "../../components/Carousel";

let logements = getApi();

let n = 0;
let menu = `logement__global`;
let header = `logement__menus__titre`;
let paragraphe = `logement__menus__desc`;

const FicheLogement = () => {
    function useLogement() {
        let { id } = useParams();
        for (let i = 0; i < logements.length; )
            if (id === logements[i].id) {
                return (n = i);
            } else {
                i++;
            }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useLogement();

    const photos = logements[n].pictures;
    const title = logements[n].title;
    const name = logements[n].host.name;
    const picture = logements[n].host.picture;
    const tags = logements[n].tags;
    const rating = logements[n].rating;
    const description = logements[n].description;
    const equipments = logements[n].equipments;
    const location = logements[n].location;

    let star = 0;
    function isStar(color) {
        while (star < rating) {
            star++;
            return (color = "#FF6060");
        }
    }

    function itemList(type) {
        return (
            <>
                {type.map((typelist) => (
                    <p key={typelist}>{typelist}</p>
                ))}
            </>
        );
    }

    return (
        <section className="logement">
            <div className="img__loader">
                <Carousel slides={photos} />
            </div>
            <div className="logement__presentation">
                <div className="logement__header">
                    <div>
                        <h2>{title}</h2>
                        <h4>{location}</h4>
                    </div>
                    <div className="logement__tags">{itemList(tags)}</div>
                </div>
                <div className="logement__part">
                    <div className="logement__misc">
                        <div className="logement__host">
                            <h5>{name}</h5>
                            <img src={picture} alt={`Portrait de ${name}`} />
                        </div>
                        <div className="logement__ratings">
                            <Star color={isStar()} />
                            <Star color={isStar()} />
                            <Star color={isStar()} />
                            <Star color={isStar()} />
                            <Star color={isStar()} />
                        </div>
                    </div>
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
                        texte={itemList(equipments)}
                        header={`${header}`}
                        paragraphe={`${paragraphe}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default FicheLogement;
