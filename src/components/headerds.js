import React from "react"
import Menuleft from "./Menuleft";

// import logo from './src/img/logo.svg';

class Headerds extends React.Component {

    render() {
        return (
            <header>
                <div class="navbar">
                    <img className="imgheader" src="/logo512.png" alt="Logo" onClick={() => !this.props.onClickMenu()}/>
                    <nav className="nav">
                        <ul>
                            <li ref="/main">Главное</li>
                            <li ref="/catalog">Каталог</li>
                            <li ref="/production">Производство</li>
                            <li ref="/news">Новости</li>
                            <li ref="/privateroom">Личный кабинет</li>
                        </ul>
                    </nav>
                </div>
            </header>


        )

    }
}

export default Headerds
