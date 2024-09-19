import React from 'react'
import './Footer.css'
import logo from '../Assats/logo.webp'
import { FaPiggyBank } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="left_box">
                <div className="box">
                    <div className="icon_box">
                    <FaPiggyBank />
                    </div>
                    <div className="detail">
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <TbTruckDelivery />
                    </div>
                    <div className="detail">
                        <h3>Free delivery</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaHeadphones />
                    </div>
                    <div className="detail">
                        <h3>24X7 Support</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaWallet />
                    </div>
                    <div className="detail">
                        <h3>Money Back</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="right_box">
                <div className="header">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptates.</p>  
                </div>
                <div className="bottom">
                    <div className="box">
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>4005, Silver Business PointIndian</li>
                            <li>+91-9680027214</li>
                            <li>singhsumer0911@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </div>      
    </>
  )
}

export default Footer
