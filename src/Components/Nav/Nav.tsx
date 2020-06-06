import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav: FC = () => {
    return (
        <nav className={classes.nav}>
            <div></div>
            <div className={classes.menu}>
            <NavLink to='/home'>HOME</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/work'>WORK</NavLink>
            <NavLink to='/process'>PROCESS</NavLink>
            <NavLink to='/services'>SERVICES</NavLink>
            <NavLink to='/testmonials'>TESTIMONIALS</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
            </div>
        </nav>
    )
}

export default Nav