import React from "react";
import {useLocation} from "react-router-dom";
// import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
// import {Button} from "@mui/material";
import '../css/kompleksdetails.css'
// import HeroSlider, {Slide} from 'hero-slider'
import "react-slideshow-image/dist/styles.css";
import {Fade} from 'react-slideshow-image';
import {IoIosArrowBack} from "react-icons/io";


function KompleksDetails() {
    const location = useLocation();


    const slideImages = [{
        url: 'http://api.dsk.uz:8089/kompleks/v1/download/house/' + location.state.mainimagepath,
        caption: 'first'
    }, {
        url: 'http://api.dsk.uz:8089/kompleks/v1/download/house/' + location.state.mainimagepathfirst,
        caption: 'Second'
    }, {
        url: 'http://api.dsk.uz:8089/kompleks/v1/download/house/' + location.state.mainimagepathsecond, caption: 'Third'
    }];

    return (
        <div className='slide-container'>
            <Fade
                // autoplay={true} duration="5000"
                prevArrow={<CustomPrevArrow/>}
                nextArrow={<CustomNextArrow/>}>
                {slideImages.map((image, index) => (
                    <div key={index} className="item">
                        <img className="imgslide" src={image.url}/>
                        {/*<span>{location.state.mainimagepath}</span>*/}
                    </div>))}
            </Fade>
        </div>
    );
}

export default KompleksDetails;


const CustomPrevArrow = (props) => (
    <div
        className="custom-prev-arrow"
        onClick={props.onClick}
        // style={{
        //     position: 'absolute',
        //     top: '50%',
        //     left: '20px',
        //     width: "100%",
        //     // height:"100%",
        //     color: "#102f36",
        //     cursor: 'pointer',
        //     opacity: "0.3",
        // }}
    >
        <img className="arrow" src={IoIosArrowBack} />
        {/*&lt;*/}
    </div>
);

const CustomNextArrow = (props) => (
    <div
        className="custom-next-arrow"
        onClick={props.onClick}
        style={{position: 'absolute', top: '50%', right: '10px', cursor: 'pointer'}}
    >
        &gt;
    </div>
);
