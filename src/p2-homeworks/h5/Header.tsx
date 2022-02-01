import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.nav_item}><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></div>
            <div className={s.nav_item}><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
            <div className={s.nav_item}><NavLink to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink></div>
        </div>
    )
}

export default Header
