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

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const Carousel = ({ slides }) => {
    const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    };

    const arrowprev = {
        left: "30px",
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
        right: "30px",
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
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
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
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
