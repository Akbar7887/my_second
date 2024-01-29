import React from "react";


class Menuleft extends React.Component {

    render() {
        return (
            <div className="menu">
                <nav className="navmenu" hidden={this.props.hiden}>
                    <section>
                        <a href="/main">Главное</a>
                        <a href="/catalog">Каталог</a>
                        <a href="/production">Производство</a>
                        <a href="/news">Новости</a>
                        <a href="/privateroom">Личный кабинет</a>
                    </section>
                </nav>
            </div>

        )
    }
}

export default Menuleft
