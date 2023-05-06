
import { Layout, Button } from "antd";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginToken } from '../../../hooks/use-login-token';
import logo from '../../../assets/EDSA logo baru item.png';
import './Header.css'

const Header = () => {
    const { Header } = Layout;
    const path = window.location.pathname;
    const [current, setCurrent] = useState(path);
    const token = useLoginToken();

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
            <div className="navbar">
                <Link to="/">
                    <img
                        src={logo} alt=""
                        style={{
                            float: "left",
                            width: 65,
                            height: 55,


                        }}
                        onClick={() => setCurrent("")}
                    />
                </Link>
                <div className="linknavbar">
                    <Link to={"/"}><p className="textlink">Home</p>
                    </Link>
                    <Link to={"/news"}><p className="textlink">News</p>
                    </Link>
                    <Link to={"/inventaris"}><p className="textlink">Inventaries</p>
                    </Link>
                    <Link to={"/divisions"}><p className="textlink">EDSA Divisions</p>
                    </Link>
                    <Link to={"/aspirasi"}><p className="textlink">EDSA Care</p>
                    </Link>
                    <Link to={"/login-register"}>< p className="textlink">Login Register</p></Link>
                    <Link to={'/'}>
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
                    </Link>
                </div>
            </div>
        </Header >
    );
};

export default Header;
