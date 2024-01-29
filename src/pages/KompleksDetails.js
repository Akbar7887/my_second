import React from "react";
import {useLocation} from "react-router-dom";

const KompleksDetails =(props)=>{
    const location = useLocation();
    console.log(location);
        return(

            <div>
                Salom: <a>{location.state.description}</a>
            </div>

        );

}

export default KompleksDetails;
