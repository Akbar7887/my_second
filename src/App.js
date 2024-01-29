import React from "react";
import './img/logo.svg';
import Header from "./components/Header";
import Menuleft from "./components/Menuleft";
import KompleksPage from "./components/KompleksPage";
import axios from "axios";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hiden: true,
            kompleks: []
        }
        if (!axios.get("http://api.dsk.uz:8089/kompleks/v1/get").then((res) => (
            this.setState({kompleks: res.data})
        )))
            this.onClickMenu = this.onClickMenu.bind(this)
    }

    render() {
        return (
            <div className="App">
                <Header hiden={this.state.hiden} onClickMenu={this.onClickMenu}/>
                <Menuleft hiden={this.state.hiden}/>
                <KompleksPage kompleks={this.state.kompleks}/>
            </div>
        );
    }

    onClickMenu() {
        return this.setState(
            {
                hiden: !this.state.hiden

            }
        )
    }


}

export default App;
