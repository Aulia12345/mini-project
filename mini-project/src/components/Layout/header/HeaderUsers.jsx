import { Layout, Menu, Row } from "antd";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { MENU_ITEM } from "../Constant";
import { Link } from "react-router-dom";
import logo from '../../../assets/EDSA logo baru item.png';
import './Header.css'

const HeaderUsers = () => {
    const { Header } = Layout;
    const path = window.location.pathname;
    const [current, setCurrent] = useState(path);
    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                backgroundColor: "white"
            }}
        >
            <Row justify="space-between">
                <Link to="/">
                    <img
                        src={logo} alt=""
                        style={{
                            float: "left",
                            width: 65,
                            height: 55,
                            margin: "5px 24px 0px 0",

                        }}
                        onClick={() => setCurrent("")}
                    />
                </Link>
                <Menu
                    mode="horizontal"
                    items={MENU_ITEM}
                    disabledOverflow
                    onClick={onClick}
                    selectedKeys={[current]}
                    style={{
                        height: 64,
                    }}
                />
            </Row>
        </Header>
    );
};

export default HeaderUsers;
