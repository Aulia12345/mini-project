import { Button } from "antd";
import { Link } from "react-router-dom";
import './header/Header.css'

export const MENU_ITEM = [
    {
        label: <Link to="/home">Home</Link>,
        key: "/home",
    },
    {
        label: <Link to="/news">News</Link>,
        key: "/news",
    },
    {
        label: <Link to="/inventaris">Inventaries</Link>,
        key: "/inventaris",
        dropdown: <div><Link to='/inventaris-admin'>Inventaris Admin</Link></div>,
    },
    {
        label: <Link to="/divisions">EDSA Divisions</Link>,
        key: "/divisions",
    },
    {
        label: <Link to="/edsacare">EDSA Care</Link>,
        key: "/edsacare",
    },
    {
        label: <Link to="/login-register">Login Register</Link>,
        key: "/login-register",

    },
    {
        label: (
            <Link to="/">
                <Button
                    type="primary"
                    onClick={() => {
                        localStorage.removeItem("token");
                    }}
                    danger
                >
                    Logout
                </Button>
            </Link>
        ),
        key: "5",
    },
];