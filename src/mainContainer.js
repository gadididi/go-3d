import React, {Component} from "react";
import ScanScreen from "./screens/ScanScreen";
import MainScreen from "./screens/MainScreen";


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'Home'
        }
    }

    changePage(nameScreen) {
        //TODO: CREATE LANDING PAGE
        if (this.state.screen === nameScreen) {
            return
        }
        console.log("im in: ", nameScreen);
        this.setState({
                screen: nameScreen
            }
        )
    }

    chosenScreen(nameScreen) {
        if (this.state.screen === nameScreen) {
            return ("nav-item active")
        } else {
            return ("nav-item")
        }
    }

    setNavBar() {
        return (
            <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row">
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                        <li className={this.chosenScreen("Home")}>
                            <h2 className="nav-link" onClick={() => this.changePage("Home")}>Home</h2>
                        </li>
                        <li className={this.chosenScreen("Scan")}>
                            <h2 className="nav-link" onClick={() => this.changePage("Scan")}>Start Scan</h2>
                        </li>
                        <li className={this.chosenScreen("Setting")}>
                            <h2 className="nav-link" onClick={() => this.changePage("Setting")}>Setting</h2>
                        </li>
                        <li className={this.chosenScreen("About")}>
                            <h2 className="nav-link" onClick={() => this.changePage("About")}>About</h2>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }

    render() {
        return (

            <div className="container-fluid">
                {this.setNavBar()}
                <div className="col-12 w-100">
                    {this.renderTheScreen()}
                </div>
            </div>


        )
    }

    renderTheScreen() {
        if (this.state.screen === 'Scan') {
            return (<ScanScreen/>);
        } else if (this.state.screen === 'Home') {
            return (<MainScreen/>);
        }
    }
}


export default MainContainer;



