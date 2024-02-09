import React, {useState} from "react";


const KompleksProjects = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    let slids = [{
        url: props.kompleks.mainimagepath,
        color: 'red'
    }, {
        url: props.kompleks.mainimagepathfirst,
        color: 'black'
    }, {
        url: props.kompleks.mainimagepathsecond,
        color: 'black'
    }];

    let [textColor, setTextColor] = useState(slids.map((e, idx) => e.color));
    let newColors = [...textColor]

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slids.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

        newColors.fill('black')
        newColors[newIndex] = 'red'
        setTextColor(newColors)
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slids.length - 1;
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
        <div className="row">
            <div className="column1">
                <h4>Проект домов:</h4>

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
                     src={'http://api.dsk.uz:8089/kompleks/v1/download/house/' + slids[currentIndex].url}
                     alt="Image"></img>
                <div className="dotsContainerStyles">
                    {slids.map((slide, slideIndex) => (
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
    )


}

export default KompleksProjects;

