import React from 'react';
import './Header.css'
import Home from '../Home/Home';
import OrderReview from '../OrderrReview/OrderReview';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt Mania!!!</h2>
            <nav>
                <CustomLink to="/" element={<Home />}>Home</CustomLink>
                <CustomLink to="/orderreview" element={<OrderReview />}>OrderReview</CustomLink>
            </nav>
        </div>
    );
};

export default Header;