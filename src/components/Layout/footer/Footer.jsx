// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Layout } from "antd";

const Footer = () => {
    const { Footer } = Layout;
    return (
        <Footer
            style={{
                textAlign: "center",
                backgroundColor: 'white'
            }}
        >
            © Copyright 2023 Created by HMJ EDSA UNESA
        </Footer>
    );
};

export default Footer;
