import {Button, Modal} from "react-bootstrap";
import {Component} from "react";
import Gallery from 'react-grid-gallery';
import ResultModal from "../components/ResultModal";

//this class in charge of showing the last 10 scans that had been saved in db server
class HistoryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: {},
            currentImage: 0,
            showNum: -1
        }
        this.show = false;
        this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
        this.infoImage = this.infoImage.bind(this);
        this.clearModal= this.clearModal.bind(this);
    }

    // ask for those 10 last scans
    componentDidMount() {
        fetch("http://localhost:5000/scan_history")
            .then(response => response.json())
            .then((response) => {
                    console.log("the response", response)
                    if (response['scans'] === false) {
                        throw new Error('Error: History response was not ok!');
                    } else {
                        let arr = [];

                        for (const key in response['scans']) {
                            if (response['scans'].hasOwnProperty(key)) {
                                arr.push([key, response['scans'][key]]);
                            }
                        }
                        this.setState({
                            images: arr
                        })
                        console.log(this.state.images)
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    }

    infoImage(e) {
        this.show = true;
        let curr = this.state.currentImage;
        this.setState({
            showNum: curr
        })

    }
    clearModal(value){
        this.show = false;
        this.setState({

        })
    }
    showModalImg() {
        console.log("showModalImg")
        if (this.state.showNum < 0 || this.show === false) {
            return <></>
        } else {
            console.log(this.state)
            this.show = false;
            let inf = this.state.images[this.state.showNum][1][2];
            console.log(this.state.showNum)
            console.log(inf)
            return (<ResultModal onExit={this.clearModal} fromHistory={true} bmi={inf['bmi_score']} weight={inf['weight']} info={inf}/>);
        }

    }

    onCurrentImageChange(index) {
        this.setState({currentImage: index});
    }

    renderImages() {
        const IMAGES = []
        const arrayLength = this.state.images.length;
        for (let i = 0; i < arrayLength; i++) {
            let element = this.state.images[i]
            // console.log(element);
            let value = element[1];
            IMAGES.push(
                {
                    src: `data:image/png;base64,` + value[1].slice(2, value[1].length - 1),
                    thumbnail: `data:image/png;base64,` + value[0].slice(2, value[0].length - 1),
                    thumbnailWidth: 320,
                    thumbnailHeight: 240,
                    // tags: [{value: key, title: "Ocean"}, {value: "People", title: "People"}],
                    caption: element[0],
                    // customOverlay : <button type="button" class="btn btn-secondary" data-content="hhhhhhh" id="popover" data-trigger="hover">Popover</button>

                }
            )
        }

        return (
            <div>
                <Gallery images={IMAGES}
                         backdropClosesModal={true}
                         currentImageWillChange={this.onCurrentImageChange}
                         customControls={[
                             <button key="infoImage" type="button" className={"btn btn-success"}
                                     onClick={this.infoImage}>Info</button>
                         ]}>

                </Gallery>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.renderImages()}
                {this.showModalImg()}
            </>
        )
    }
}

export default HistoryScreen;