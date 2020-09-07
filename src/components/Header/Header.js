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
            {props.showNavbar && <SideBar className="slideBar" pageWrapId={"page-wrap"} />}
            <div className={style.wrapper}>
                <Link exact to="/"><img className={style.logo} src={logo} /></Link>
                <nav className={style.navbar}>
                    <div className={style.navbarMenu} style={{ display: props.showNavbar ? "flex" : "none" }}>
                        <div className={style.navLinks}>
                            <Link to="/jogs">Jogs</Link>
                            <Link to="/info">Info</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                        {props.showFilterBar && <img
                            onClick={props.onClickFilterIcon}
                            alt=""
                            className={style.imgFilter + " " + style.imgShowFilter}
                            src={img_filter} />
                        }
                        {!props.showFilterBar && <img
                            onClick={props.onClickFilterIcon}
                            alt=""
                            className={style.imgFilter + " " + style.imgHideFilter}
                            src={img_filter_white} />
                        }
                    </div>
                </nav>
            </div>

        </header>
    );
}