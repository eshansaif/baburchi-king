import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <h2 className="btn btn-ghost normal-case text-xl">Baburchi King</h2>
                <p>Baburchi King Ltd.<br />Providing Fresh and Healthy Recipes since 1952</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Recipes</a>
                <a className="link link-hover">Chefs</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer >
    );
};

export default Footer;