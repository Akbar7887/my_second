import React, {useState} from "react";
import '../css/kompleksdetails.css'
import "react-slideshow-image/dist/styles.css";
import {useLocation} from "react-router-dom";


const KompleksDetails = () => {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);

    let sliders = [{
        url: location.state.mainimagepath,
        color: 'black'
    }, {url: location.state.mainimagepathfirst, color: 'black'}, {
        url: location.state.mainimagepathsecond,
        color: 'black'
    }];
    let [textColor, setTextColor] = useState(Array(sliders.length).fill('black'));
    let newColors = [...textColor]


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

        newColors.fill('black')
        newColors[newIndex] = 'red'
        setTextColor(newColors)
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        newColors.fill('black')
        newColors[newIndex] = 'red'
        setTextColor(newColors)
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        const newColors = [...textColor]
        newColors.fill('black')
        newColors[slideIndex] = 'red'

        setTextColor(newColors)
    };


    return (
        <div className="container">
            <div>
                <div onClick={goToPrevious} className="leftArrowStyles">
                    ❰
                </div>
                <div onClick={goToNext} className="rightArrowStyles">
                    ❱
                </div>
            </div>
            <img className="slideStyles"
                 src={'http://api.dsk.uz:8089/kompleks/v1/download/house/' + sliders[currentIndex].url}
                 alt="Image"></img>
            <div className="dotsContainerStyles">
                {sliders.map((slide, slideIndex) => (
                    <div
                        className="dotStyle"
                        // id={slideIndex}
                        key={slideIndex}
                        style={{color: textColor[slideIndex]}}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};
export default KompleksDetails;
