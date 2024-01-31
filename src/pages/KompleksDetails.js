import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {Button} from "@mui/material";


export default function KompleksDetails() {
    const location = useLocation();
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {

    }
    const prevSlide = () => {

    }
    // console.log(location);
    return (<div class="main" className="container-slider">

        {/*className={slideIndex === 0 ? "slide acrive-anim" : "slide"}*/}
        <div className="slider">
            <img src={'http://api.dsk.uz:8089/kompleks/v1/download/house/' + location.state.mainimagepath}/>
        </div>
        <Button classname="btn-left">
            <FaAngleLeft className="leftside"></FaAngleLeft>
        </Button>
        <Button classname="btn-right">
            <FaAngleRight className="rightside"></FaAngleRight>
        </Button>


    </div>);


}
