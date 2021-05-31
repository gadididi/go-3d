import React, {Component} from "react";
import {Nav} from "react-bootstrap";
import './styles/Dashboard.css'

class Side extends Component {
    constructor(props) {
        super(props);
        this.screen = props.showPage;
        this.prevPage = props.prev;
    }

    changePage(nameScreen) {
        if (this.screen === nameScreen) {
            return;
        }
        this.screen = nameScreen;
        console.log("im in: ",this.screen);
        this.handleChange(nameScreen);
    }
    handleChange(e) {
        this.props.onChange(e);
    }

    renderButton() {
        return (
            <>
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                     activeKey="/home"
                     onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                    <div className="sidebar-sticky">
                        <Nav.Item>
                            <Nav.Link>
                                <button className="btn-primary btn-lg " onClick={() => this.changePage("Home")}>
                                    Home
                                </button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <button className="btn-primary btn-lg " onClick={() => this.changePage("Start Scan")}>
                                    Start Scan
                                </button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <button className="btn-primary btn-lg "
                                        onClick={() => this.changePage("Setting")}> Setting
                                </button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <button className="btn-primary btn-lg "
                                        onClick={() => this.changePage("History")}> History
                                </button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <button className="btn-primary btn-lg "
                                        onClick={() => this.changePage("About")}> About
                                </button>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                </Nav>
            </>
        )
    }

    render() {
        return (
            this.renderButton()
        );
    }


}

// const Sidebar = withRouter(Side);
export default Side