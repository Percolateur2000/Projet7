import { useState } from "react";
import Arrow from "../components/Arrow";

// il s'agit de la version trouvée ici : https://github.com/monsterlessonsacademy/monsterlessonsacademy/blob/221-react-image-slider/src/ImageSlider.js

const slideStyles = {
    width: "1240px",
    height: "415px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const slideNumber = {
    position: "absolute",
    color: "white",
    bottom: "10px",
    margin: "auto",
    width: "100%",
    textAlign: "center",
};

const Carousel = ({ slides }) => {
    const arrowprev = {
        left: "10px",
        zindex: "2",
        transform: "rotateZ(180deg)",
        top: "150px",
        opacity: slides.length <= 1 ? "0" : "1",
        height: "130px",
        width: "130px",
        position: "absolute",
    };

    const arrownext = {
        opacity: slides.length <= 1 ? "0" : "1",
        zindex: "2",
        right: "10px",
        top: "150px",
        height: "130px",
        width: "130px",
        position: "absolute",
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex]})`,
    };

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious}>
                    <Arrow style={arrowprev} />
                </div>
                <div onClick={goToNext}>
                    <Arrow style={arrownext} />
                </div>
            </div>
            <div style={slideNumber}>
                {currentIndex + 1} / {slides.length}
            </div>
            <div style={slideStylesWidthBackground}></div>
        </div>
    );
};

export default Carousel;
