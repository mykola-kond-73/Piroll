import React, { FC } from 'react'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <div>
                <div className={classes.title}>Piroll Design, Inc.</div>
                <div>&copy; 2017 Piroll. All rights reserved.
                Designed by robiruck.
                </div>
            </div>
            <address className={classes.address}>
                <div>hello@pirolltheme.com</div>
                <div>44 987 065 908</div>
            </address>
            <nav className={classes.nav}>
                <div><NavLink to='/work' ><span>span>Work</span></NavLink></div>
                <div><NavLink to='/about' ><span>About</span></NavLink></div>
                <div><NavLink to='/services' ><span>Services</span></NavLink></div>
                <div><NavLink to='/contact' ><span>Contact</span></NavLink></div>
            </nav>
            <nav className={classes.nav}>
                <div><NavLink to='facebook.com' ><span>Facebook</span></NavLink> </div>
                <div><NavLink to='twitter.com' ><span>Twitter</span></NavLink> </div>
                <div><NavLink to='instagram.com' ><span>Instagram</span></NavLink> </div>
                <div><NavLink to='dribbble.com' ><span>Dribbble</span></NavLink> </div>
            </nav>
        </footer>
    )
}

export default Footer