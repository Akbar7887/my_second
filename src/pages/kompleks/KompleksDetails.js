import React, {useState} from "react";
import '../../css/komleks/kompleksdetails.css'
import "react-slideshow-image/dist/styles.css";
import {useLocation} from "react-router-dom";
import KompleksProjects from "./kompleksProjects";



const KompleksDetails =() =>{
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);

    let sliders = [{
        url: location.state.mainimagepath,
        color: 'red'
    }, {
        url: location.state.mainimagepathfirst,
        color: 'black'
    }, {
        url: location.state.mainimagepathsecond,
        color: 'black'
    }];
    let [textColor, setTextColor] = useState(sliders.map((e) => e.color));
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

        <div>
            <div className="row">
                <div className="column1">
                    <h2>{location.state.title}</h2>
                    <hr/>
                    <h4>Тип построение:</h4>
                    <h3>{location.state.typehouse}.</h3>
                    <h4>Год построение:</h4>
                    <h3>{location.state.dateproject.slice(0, 4)} год.</h3>
                    <h4>Заказчик:</h4>
                    <h3>{location.state.customer}.</h3>

                </div>
                <div className="column2">
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
            </div>
            <hr/>
            <KompleksProjects kompleks={location.state}/>
        </div>


    );
};
export default  KompleksDetails;

