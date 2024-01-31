import React from "react"
import Menuleft from "./Menuleft";

// import logo from './src/img/logo.svg';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="container">

                    <div className="logosection">
                        <img className="img" src="/logo512.png" alt="Logo" onClick={() => !this.props.onClickMenu()}/>
                    </div>
                    <div className="nav">
                        <ul>
                            <li ref="/main">Главное</li>
                            <li ref="/catalog">Каталог</li>
                            <li ref="/production">Производство</li>
                            <li ref="/news">Новости</li>
                            <li ref="/privateroom">Личный кабинет</li>
                        </ul>
                    </div>
                </div>

            </header>


        )

    }
}

export default Header
