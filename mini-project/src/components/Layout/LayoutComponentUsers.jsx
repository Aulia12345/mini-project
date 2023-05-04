// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Layout } from "antd";
import HeaderComponent from "./header/HeaderUsers";
import FooterComponent from "./footer/Footer"
import "./LayoutComponent.css";
import FooterInfo from './footer/FooterInfo';

// eslint-disable-next-line react/prop-types
const LayoutComponentUsers = ({ children }) => {
    const { Content } = Layout;

    return (
        <>
            <Layout>
                {/* Header */}
                <HeaderComponent />

                {/* Content */}
                <Content
                    className="site-layout"
                    style={{
                        backgroundColor: 'white',
                    }}
                >
                    <div

                    >
                        {children}
                    </div>
                </Content>

                {/* Footer */}
                <FooterInfo />
                <FooterComponent />
            </Layout>
        </>
    );
}

export default LayoutComponentUsers;