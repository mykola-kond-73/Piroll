import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import icon from '../../media/icons/png/001-down-arrow.png'

const Nav: FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.icon}><img src={icon} alt="icon" /></div>
            <nav className={classes.menu}>
                <div>
                    <NavLink activeClassName={classes.active} to='/home'><span>HOME</span></NavLink>
                </div>
                <div>
                    <NavLink activeClassName={classes.active} to='/about'><span>ABOUT</span></NavLink>
                </div>
                <div>
                    <NavLink activeClassName={classes.active} to='/work'><span>WORK</span></NavLink>
                </div>
                <div>
                    <NavLink activeClassName={classes.active} to='/process'><span>PROCESS</span></NavLink>
                </div>
                <div>
                    <NavLink activeClassName={classes.active} to='/services'><span>SERVICES</span></NavLink>
                </div>
                <div>
                    <NavLink activeClassName={classes.active} to='/testmonials'><span>TESTIMONIALS</span></NavLink>
                </div>
                <div>
                    <NavLink activeClassName={classes.active} to='/contact'><span>CONTACT</span></NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Nav