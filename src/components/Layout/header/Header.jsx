
import { Layout, Button, Dropdown, Space } from "antd";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoginToken } from '../../../hooks/use-login-token';
import logo from '../../../assets/EDSA logo baru item.png';
import './Header.css'
import { usePathName } from "./Hook/useLink";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
    const { Header } = Layout;
    const path = usePathName();
    console.log(path)
    // eslint-disable-next-line no-unused-vars
    const [current, setCurrent] = useState(path);
    const token = useLoginToken();

    const navStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }

    // dropdown
    const items = [
        {
            key: '1',
            label: (<NavLink to={'/inventaris'}>Inventaris</NavLink>)
        },
        {
            key: '2',
            label: (<NavLink to={'/inventaris-admin'}>Inventaris Admin</NavLink>)
        }
    ];

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
            <nav className="navbar">
                <NavLink to="/">
                    <img
                        src={logo} alt=""
                        style={{
                            float: "left",
                            width: 65,
                            height: 55,


                        }}
                        onClick={() => setCurrent("")}
                    />
                </NavLink>
                <nav className="linknavbar" onClick={() => setCurrent("")}>
                    <NavLink style={navStyles} to={"/"} ><p className="textlink">Home</p>
                    </NavLink>
                    <NavLink style={navStyles} to={"/news"}><p className="textlink">News</p>
                    </NavLink>
                    <Dropdown className="linknavbarD"
                        menu={{ items }}>
                        <NavLink onClick={(e) => e.preventDefault()}>
                            <Space className="textlink">Inventaris <DownOutlined /></Space>
                        </NavLink>
                    </Dropdown>
                    <NavLink style={navStyles} to={"/divisions"}><p className="textlink">EDSA Divisions</p>
                    </NavLink>
                    <NavLink style={navStyles} to={"/aspirasi"}><p className="textlink">EDSA Care</p>
                    </NavLink>
                    <NavLink style={navStyles} to={"/login-register"}>{!token && < p className="textlink">Login Register</p>}</NavLink>
                    <NavLink to={'/'}>
                        {token && <Button
                            style={{
                                marginTop: '25px'
                            }}
                            type="primary"
                            onClick={() => {
                                localStorage.removeItem("token");
                            }}
                            danger
                        >
                            Logout
                        </Button>
                        }
                    </NavLink>
                </nav>
            </nav>
        </Header >
    );
};

export default Header;
