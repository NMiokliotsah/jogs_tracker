import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export default function SideBar(props) {
    return (
        <div>
            <Menu {...props}>
                <Link to="/jogs">Jogs</Link>
                <Link to="/info">Info</Link>
                <Link to="/contact">Contact Us</Link>
            </Menu>
        </div>

    );
};
