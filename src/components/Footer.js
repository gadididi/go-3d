import React from "react";
import { Form} from "react-bootstrap";

// the owners line in the bottom
function Footer() {
    return (
        <footer className="page-footer font-small gray footer">

            <div className="footer-copyright text-center py-3" style={{backgroundColor: 'lightgray', borderTop: '1px solid'}}>
                <Form.Text >All right reserved to Ori Levy and Gadi Didi, for contact please use linkedin:
                    <a href="https://www.linkedin.com/in/ori-levy/" target="_blank" rel="noopener noreferrer" className="author">Ori Levy</a>
                     ,
                    <a href="https://www.linkedin.com/in/gadi-didi-216537188/" target="_blank" rel="noopener noreferrer" className="author">Gadi Didi</a>
                </Form.Text>

            </div>

        </footer>
    );
}

export default Footer;