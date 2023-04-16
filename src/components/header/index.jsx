import React from 'react';
import "./stayles.scss"
import img from "../../assets/img.png"

const Header = (props) => {
    return(
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" src={img} alt="logo img"/>
                    dog
                </div>
            </div>
        </header>
    )
}
export default Header;