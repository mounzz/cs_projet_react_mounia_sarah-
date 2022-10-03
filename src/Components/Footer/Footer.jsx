import React from 'react'
import "./footer.css"
import payment from "../../images/footer-payment-icon.png"
import { FaSnapchatGhost, FaInstagram, FaFacebookF, FaPinterestP, FaYoutube, FaRegArrowAltCircleUp } from "react-icons/fa"

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer1">
                    <div className="info1">
                        <h5>GET IN TOUCH</h5>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson st, New York, NY 10018 or call us on <a href="tel:+1967166879">(+1) 96 716 6879</a></p>
                        <ul>
                            <li><a href=""><FaFacebookF className='reseau' /></a></li>
                            <li><a href=""><FaInstagram className='reseau' /></a></li>
                            <li><a href=""><FaPinterestP className='reseau' /></a></li>
                            <li><a href=""><FaSnapchatGhost className='reseau' /></a></li>
                            <li><a href=""><FaYoutube className='reseau' /></a></li>
                        </ul>
                    </div>
                    <div className="info2">
                        <h5>LINKS</h5>
                        <ul>
                            <li><a href="">Search</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Returns</a></li>
                        </ul>
                    </div>
                    <div className="info3">
                    <h5>LINKS</h5>
                        <ul>
                            <li><a href="">Search</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Returns</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer2">
                    <div className="payment">
                        <img src={payment} alt="" />
                    </div>
                    <div className="copyright">
                        <p>Copyright © All rights reserved.</p>
                    </div>
                </div>
                <a href="#top"><FaRegArrowAltCircleUp className='fleche' /></a>
            </footer>
        </div>
    )
}
