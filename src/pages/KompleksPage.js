import React from "react";
import {useNavigate} from "react-router-dom";


const KompleksPage = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="total"><h2> Комплексы</h2></div>
            <div class="crid" className="kompleks">
                {props.kompleks.map((el, index) => (
                    <dic class="card" className="card" key={index} onClick={() => (navigate('kompleksdetails', {
                        state: el
                    }))}>
                        <div className="left">
                            <div class="container" className="cardcontent1"><h3>{el.title}</h3>
                                <img className="imgleft"
                                     src={'http://api.dsk.uz:8089/kompleks/v1/download/house/' + el.mainimagepath}></img>
                            </div>
                        </div>
                        <div className="right">
                            <div class="flex-row" className="cardcontent2">
                                <div class="flex-container" className="container">
                                    <h2 className="a1">Тип: <em>{el.typehouse}</em></h2>
                                    {/*<h2 className="a2"></h2>*/}
                                    <h2 className="a2">Заказчик: <em>{el.customer}</em></h2>
                                </div>
                                <hr/>
                                <p>{el.description}</p></div>
                        </div>
                    </dic>
                ))}
            </div>
        </div>
    )

}

export default KompleksPage
