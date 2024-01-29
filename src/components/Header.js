import React from "react"
import Menuleft from "./Menuleft";

// import logo from './src/img/logo.svg';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="container">

                    <div className="logosection">
                        <img className="img" src="/logo512.png" alt="Logo"  onClick={() => !this.props.onClickMenu()}/>

                    </div>


                    <section className="nav">
                        <a href="/main">Главное</a>
                        <a href="/catalog">Каталог</a>
                        <a href="/production">Производство</a>
                        <a href="/news">Новости</a>
                        <a href="/privateroom">Личный кабинет</a>
                    </section>

                </div>

            </header>


        )

    }
}

export default Header
