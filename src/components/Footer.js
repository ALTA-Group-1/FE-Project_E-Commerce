import React from "react";
import { Col } from "react-bootstrap";
import "../style/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="atas">
                <div className="text">
                    <div className="row">
                        <div className="col"> Product</div>
                        <div className="col"> Contact</div>
                        <div className="col"> Social</div>
                        <div className="col"> About</div>
                    </div>
                </div>
            </div>
            <div className="bawah">
                <div className="text">&copy;Copyright ALTA-FE-08-GROUP1
                </div>
            </div>
        </footer>
    );
};
export default Footer;
