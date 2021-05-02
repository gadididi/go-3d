import React, {Component} from "react";
import {Container, Row, Col, Card, Form, Button, Nav} from "react-bootstrap";
//import {withRouter} from "react-router";
//import Sidebar from "./sidebar.js";
import './styles/Dashboard.css'
import Side from "./sidebar";
import MainScreen from "./screens/MainScreen";
import ScanScreen from "./screens/ScanScreen";
import SettingScreen from "./screens/SettingScreen";
import AboutScreen from "./screens/AboutScreen";


class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
            prevPage: "None"
        }
        this.handleNewScreen = this.handleNewScreen.bind(this);
    }

    handleNewScreen(value) {
        let prev = this.state.page;
        this.setState({
            page: value,
            prevPage: prev
        })
    }

    renderPage() {
        console.log(this.state)
        if (this.state.page === "Home") {
            return <MainScreen/>
        } else if (this.state.page === "Start Scan") {
            return <ScanScreen/>
        } else if (this.state.page === "Setting") {
            return <SettingScreen/>
        } else {
            return <AboutScreen/>
        }
    }

    render() {
        return (
            <>
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
            </>
        );
    }
}

// const Dashboard = withRouter(Dash);
export default Dash