import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../../img/logo.png';
import img_filter from '../../img/filter-active.png';
import img_filter_white from '../../img/filter.png';
import SideBar from '../SideBar/SideBar';

export default function Header(props) {
    return (
        <header>
            <SideBar className="slideBar" pageWrapId={"page-wrap"} />
            <div className={style.wrapper}>
                <a><img className={style.logo} src={logo} /></a>
                <nav className={style.navbar}>
                    <div className={style.navbarMenu} style={{ display: props.showNavbar ? "flex" : "none" }}>
                        <Link to="/jogs">Jogs</Link>
                        <Link to="/info">Info</Link>
                        <Link to="/#">Contact Us</Link>
                        {props.showFilter && <img
                            alt=""
                            className={style.imgFilter}
                            src={img_filter} />
                        }
                        {!props.showFilter && <img
                            alt=""
                            className={style.imgFilter}
                            src={img_filter_white} />
                        }
                    </div>
                </nav>
            </div>

        </header>
    );
}