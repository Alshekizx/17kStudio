import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footerMain">
      <div className="footerMain22">
        <div className="footerMainDiv">
          <div className="footerMainLeft">
            <p className="footerMainP">Developed by</p>
            <h3 className="footerMainH3">17k Studio</h3>
          </div>
          <div className="footerMainRight">
            <nav className="FooterNavbar">
              <ul className="footerNav">
                <li className="footerNavList">
                  <Link to="/">Home</Link>
                </li>
                <li className="footerNavList">
                  <Link to="/Project">Projects</Link>
                </li>
                <li className="footerNavList">
                  <Link to="/About">About</Link>
                </li>
                <li className="footerNavList">
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="contactPhoneEmail">
          <p>Email : 17kanimations@gmail.com</p>
          <p>Phone : +2349069194917</p>
          <p>Instagram : @17k_studio</p>
        </div>
      </div>
    </div>
  );
}
