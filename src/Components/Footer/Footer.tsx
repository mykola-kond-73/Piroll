import React, { FC } from 'react'
import classes from './Footer.module.css'
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom'

const Footer: FC<PropsType> = props => {
    const location = props.location.pathname
    return (
        <footer className={classes.footer} style={location == '/work' || '/about' ? { position: 'relative', top: '50px' } : {}}>
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
                <div><NavLink to='/home' ><span>Home</span></NavLink></div>
                <div><NavLink to='/work' ><span>Work</span></NavLink></div>
                <div><NavLink to='/about' ><span>About</span></NavLink></div>
                <div><NavLink to='/services' ><span>Services</span></NavLink></div>
                <div><NavLink to='/contact' ><span>Contact</span></NavLink></div>
            </nav>
            <nav className={classes.nav}>
                <div><a target='blank' href='https://www.facebook.com' ><span>Facebook</span></a> </div>
                <div><a target='blank' href='twitter.com' ><span>Twitter</span></a> </div>
                <div><a target='blank' href='instagram.com' ><span>Instagram</span></a> </div>
                <div><a target='blank' href='dribbble.com' ><span>Dribbble</span></a> </div>
            </nav>
        </footer>
    )
}

export default withRouter(Footer)

type PathParamsType = {}

type PropsType = RouteComponentProps<PathParamsType>