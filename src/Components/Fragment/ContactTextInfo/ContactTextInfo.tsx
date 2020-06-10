import React, { FC } from 'react'
import classes from './ContactTextInfo.module.css'

const ContactTextInfo: FC<propsType> = props => {
    return (
        <div>
            <span className={classes.title}>
                {props.title}
            </span>
            <p className={classes.text}>
                {props.param1}
            </p>
            <div className={classes.items}>
                <div>{props.param6} <span  className={classes.param}>{props.param2}</span></div>
                <div>{props.param7} <span  className={classes.param}>{props.param3}</span></div>
                <div>{props.param8} <span  className={classes.param}>{props.param4}</span></div>
                <div>{props.param9} <span  className={classes.param}>{props.param5}</span></div>
            </div>
        </div>
    )
}

export default ContactTextInfo

type propsType = {
    title: string | null
    param1: string | null
    param2: string | null
    param3: string | null
    param4: string | null
    param5: string | null
    param6: string | null
    param7: string | null
    param8: string | null
    param9: string | null
}