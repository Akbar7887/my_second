import React from "react";
import './img/logo.svg';
import Header from "./components/Header";

import axios from "axios";
import KompleksDetails from "./pages/KompleksDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import KompleksPage from "./pages/KompleksPage";


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
                {/*<Menuleft hiden={this.state.hiden}/>*/}
                <main>
                    <BrowserRouter class="main">
                        <Routes>
                            <Route index element={<KompleksPage kompleks={this.state.kompleks}/>}></Route>
                            <Route path="/kompleksdetails" element={<KompleksDetails/>}></Route>
                        </Routes>
                    </BrowserRouter>
                </main>


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
