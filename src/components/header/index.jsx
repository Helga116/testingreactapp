import React from 'react';
import "./stayles.scss"
import img from "../../assets/img.png"

const Header = (props) => {
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={img} alt="logo img"/>
                </div>
            </div>
        </header>
    )
}
export default Header;