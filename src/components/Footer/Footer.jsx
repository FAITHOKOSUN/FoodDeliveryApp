import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                 <img src={assets.logo} alt="" /> 
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptate molestiae, laudantium ex cupiditate aliquid eaque non voluptatem alias odio obcaecati, rerum quo culpa, facere eligendi repudiandae quos officiis in?</p>  
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+123-345-456</li>
                        <li>contact@tomato.com</li>
                    </ul>
                   
                </div>
            </div>
        </div>
        <hr />
            <p className='footer-copyright'>Copyright &copy; 2024 Tomato. All rights reserved.</p>
    </div>
  )
}

export default Footer;
