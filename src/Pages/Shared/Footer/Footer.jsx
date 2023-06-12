import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 mt-20 bg-[#FFFFFF] text-base-content">
            <div>
                <img src="https://i.ibb.co/tK3xQR2/logo.jpg" alt="" />
                <p className='text-gray-400'>Copyright © 2023 - All right reserved by Language Center</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover text-gray-400">English</a>
                <a className="link link-hover text-gray-400">Spanish</a>
                <a className="link link-hover text-gray-400">French</a>
                <a className="link link-hover text-gray-400">German</a>
                <a className="link link-hover text-gray-400">More</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover text-gray-400">Terms of use</a>
                <a className="link link-hover text-gray-400">Privacy policy</a>
                <a className="link link-hover text-gray-400">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover text-gray-400">About us</a>
                <a className="link link-hover text-gray-400 ">Contact</a>

            </div>



        </footer>

    );
};

export default Footer;