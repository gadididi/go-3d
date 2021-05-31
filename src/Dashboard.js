import React, {Component} from "react";
import {Container, Row, Col, Card, Form, Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
//import {withRouter} from "react-router";
//import logo from "./sidebar.js";
import logo from './images/man.png';
import './styles/Dashboard.css'
import Side from "./sidebar";
import MainScreen from "./screens/MainScreen";
import ScanScreen from "./screens/ScanScreen";
import SettingScreen from "./screens/SettingScreen";
import AboutScreen from "./screens/AboutScreen";
import Footer from "./components/Footer"


class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
            prevPage: "None"
        }
        this.dis = 0.4
        this.handleNewScreen = this.handleNewScreen.bind(this);
        this.setDis= this.setDis.bind(this);
    }
    setDis(val){
        this.dis = val
    }
    handleNewScreen(value) {
        let prev = this.state.page;
        this.setState({
            page: value,
            prevPage: prev,

        })
    }

    renderPage() {
        console.log(this.state)
        if (this.state.page === "Home") {
            return <MainScreen/>
        } else if (this.state.page === "Start Scan") {
            return <ScanScreen/>
        } else if (this.state.page === "Setting") {
            return <SettingScreen dis={this.dis} onChange={this.setDis}/>
        } else {
            return <AboutScreen/>
        }
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand={'sm'}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-middle"
                        />
                    </Navbar.Brand>
                    <h3 style={{color : "white"}}>GO 3D</h3>
                </Navbar>
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Side streamConnected={this.streamConnected} showPage={this.state.page}
                                  prev={this.state.prevPage} onChange={this.handleNewScreen}/>
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            {this.renderPage()}
                        </Col>

                    </Row>
                </Container>
                <Footer/>
            </>
        );
    }
}

// const Dashboard = withRouter(Dash);
export default Dash


