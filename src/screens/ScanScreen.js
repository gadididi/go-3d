import React, {Component} from "react";
import Camera from "../components/Camera";
import {Col, Container, Row} from "react-bootstrap";
import logo from '../images/camera_off.png';
import WeightModal from "../components/WeightModal";
import ResultModal from "../components/ResultModal";
import CircularStatic from "../components/Loader";
import FailedProcessModal from "../components/FailedprocessPic";



class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCamera: false,
            tookPic: false,
            picThatTook: null,
            weightTook: false,
            weight: null,
            load : false,
            processFrame : false

        }
        this.failed = false;
        this.openOrCloseCamera = this.openOrCloseCamera.bind(this);
        this.takePic = this.takePic.bind(this);
        this.ShowResClick = this.ShowResClick.bind(this);
        this.tryAgainClick = this.tryAgainClick.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
    }

    handleWeight(weight) {
        console.log(weight)
        this.ShowResClick(weight).then(r => {
            console.log("good")
        });
    }

    setOpenCamera(prev){
        //let prev = this.state.openCamera;
        this.setState({
            openCamera: !prev,
            load: false
        })
    }
    openOrCloseCamera() {
        const loading = this.state.openCamera === false;
        this.setState({
            load: loading
        })
        if (this.state.openCamera === false){
            setTimeout(()=>{this.setOpenCamera(this.state.openCamera)}, 3000);
        }else {
            this.setOpenCamera(this.state.openCamera)
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/scan")
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['connected'] === false) {
                        throw new Error('Network response was not ok');
                    } else {
                        console.log("connected success");
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    componentWillUnmount() {
        this.setState(
            {openCamera: false}
        )
        fetch("http://localhost:5000/scan/cancel_scan")
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['cancel_scan'] === false) {
                        throw new Error('Network response was not ok');
                    } else {
                        console.log("disconnected success");
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    cameraIsOpen() {
        console.log("cameraIsOpen?????")
        if (this.state.openCamera) {
            return <Camera/>
        }
        return <img src={logo} width="640" height="480" alt={"Me"}/>
    }

    takePic() {
        fetch("http://localhost:5000/scan/take_snapshot")
            .then(response => response.json())
            .then((response) => {
                    // console.log("the response", response)
                    if (response['snapshot'] === false) {
                        throw new Error('Failed to take a Picture');
                    } else {
                        console.log("take a Picture");
                        let img = `data:image/png;base64,` + response["image"].slice(2, response["image"].length - 1);
                        // console.log(img)
                        this.setState({
                            openCamera: false,
                            tookPic: true,
                            picThatTook: img,
                            weight: null

                        })
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    renderOpenCloseButton() {
        if(this.state.weight != null || this.state.load === true){
            return <></>;
        }
        if (this.state.tookPic) {
            return <>
                <div>
                    <button type="button"
                            className={"btn btn-danger"}
                            onClick={this.tryAgainClick}>
                        <h2> Try Again</h2>
                    </button>
                    <WeightModal weight={this.state.weight} onChange={this.handleWeight}/>
                </div>
            </>
        } else if (this.state.openCamera === false) {
            return(
                <>
                <div>
                    <button type="button"
                            className={"btn btn-success"}
                            onClick={this.openOrCloseCamera}>
                        <h2> Open Video</h2>
                    </button>
                    {this.showFailedPicModal()}
                </div>
            </>
            )
        } else {
            return (
                <>
                    <button type="button"
                            className={"btn btn-danger"}
                            onClick={this.openOrCloseCamera}>
                        <h2> Close Video</h2>
                    </button>
                    <button type="button" className="btn btn-info" onClick={this.takePic}>
                        <h2> Take a Pic</h2>
                    </button>
                </>
            )

        }
    }
    showFailedPicModal(){
        if (this.failed === true){
            this.failed = false;
            return <FailedProcessModal/>
        }
        return <></>

    }
    showResults() {
        return <ResultModal weight={this.state.weight} info={this.state.info}/>
    }
    renderScreenScan(){
        if(this.state.processFrame){
            return <CircularStatic/>;
        }
        if (this.state.load === true){
            return <CircularStatic/>
        }
        else if(this.state.tookPic===false){
             return this.cameraIsOpen();
        } else if (this.state.weight === null){
            return this.showPicTaken();
        } else {
            return this.showResults();
        }
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        {this.renderScreenScan()}
                    </Col>

                </Row>
                <Row xs={2}>
                    <Col xs={12}>
                        {this.renderOpenCloseButton()}
                    </Col>

                </Row>

            </Container>
        )
    }

    //  ShowResClick() {
    //     if (this.state.weight === null) {
    //         alert("You have to write subject's weight in the TextBox before you click 'Show Results'...")
    //         return;
    //     }
    //     let time_str = Date().toLocaleString().replace(/\s+/g, '').replace(":", '')
    //     console.log(time_str)
    //     const requestOptionsSave = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'}
    //     };
    //     console.log(time_str)
    //     fetch("http://localhost:5000/scan/save_scan/" + time_str, requestOptionsSave).then(response => response.json())
    //         .then((response) => {
    //             console.log("the response save_scan: ", response)
    //             if (response['save_scan'] === false) {
    //                 throw new Error('Failed to save_scan');
    //             } else {
    //                 const requestOptions = {
    //                     method: 'POST',
    //                     headers: {'Content-Type': 'application/json'}
    //                 };
    //                 let w = this.state.weight.toString();
    //                 fetch("http://localhost:5000/scan/process_frame/" + time_str +"/" + w, requestOptionsSave).then(response => response.json())
    //                     .then((response) => {
    //                     console.log("the response process_frame:", response)
    //                     if (response['process_frame'] === false) {
    //                         throw new Error('Failed to process the frame');
    //                     } else {
    //                         console.log("process frame done!");
    //                         console.log(response["results"]);
    //                         // this.setState({
    //                         //     openCamera: true,
    //                         //     tookPic: false,
    //                         //     picThatTook: null
    //                         // })
    //                     }
    //                     console.log("save_scan done!");
    //                 }).catch((error) => {
    //                     console.log(error);
    //                 })
    //
    //             }
    //         }).catch((error) => {
    //         console.log(error);
    //         alert("fail to save the image");
    //         return "not good";
    //     });
    // }


    async ShowResClick(w) {
        let time_str = Date().toLocaleString().replace(/\s+/g, '').replace(":", '')
        console.log(time_str)
        const requestOptionsSave = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        };
        const response = await fetch("http://localhost:5000/scan/save_scan/" + time_str, requestOptionsSave);
        response.json().then(function (value) {
            console.log("the response save_scan:", value)
            if (value['save_scan'] === false) {
                throw new Error('Failed to save_scan');
            } else {
                console.log("save_scan done!");
            }
        }).catch((error) => {
            console.log(error);
            alert("fail to save the image");
            return "not good";
        });
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        };
        this.setState({
            processFrame : true
        })
        fetch("http://localhost:5000/scan/process_frame/" + time_str + "/" + w, requestOptions).then(async (response2) => {
            const json2 = await response2.json();
            console.log("the response process_frame:", json2)
            if (json2['process_frame'] === false) {
                throw new Error('Failed to process the frame');
            } else {
                console.log("process frame done!");
                console.log(json2["results"]);
                this.failed =  false;
                this.setState({
                    openCamera: false,
                    tookPic: true,
                    weight: w,
                    info : json2["results"],
                    processFrame : false
                })

                console.log(this.state)
            }
        }).catch((error) => {
            console.log(error);
            this.failed = true
            this.setState({
                openCamera: false,
                tookPic: false,
                weight: null,
                info : null,
                img: null,
                load: false,
                picThatTook: null,
                processFrame : false

            })
            console.log(this.state)
        });
    }

    tryAgainClick() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React POST Request Example'})
        };
        fetch("http://localhost:5000/scan/clear_cache", requestOptions)
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['clear_cache'] === false) {
                        throw new Error('Failed to clear_cache');
                    } else {
                        console.log("clearing the cache");
                        this.setState({
                            openCamera: true,
                            tookPic: false,
                            picThatTook: null,
                            weight: null
                        })
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    showPicTaken() {
        if (this.state.tookPic === false) {
            return <></>
        }
        return (<>
            <div>
                <img src={this.state.picThatTook} style={{border: "5px solid gray"}} alt={"Me"}/>
            </div>
        </>);
    }
}

export default ScanScreen;

