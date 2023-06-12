import React from 'react';
import Logo from "../images/logo.png";
const Footer = () =>{
    return (
        <div>
            <footer className="footer-bg">
                <div className="f-logo mb-4">
                    <img src={Logo}/>
                </div>
                <div>© Copyright  2023 All Right Reserved.</div>
            </footer>
        </div>
    )
}
export default Footer;