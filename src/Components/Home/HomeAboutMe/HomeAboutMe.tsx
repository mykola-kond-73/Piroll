import React, { FC } from 'react'
import TextInfo from '../../Fragment/TextInfo/TextInfo'
import Image from '../../Fragment/Image/Image'
import classes from './HomeAboutMe.module.css'
import classesBriefInfo from '../BriefInfo/BriefInfo.module.css'

const HomeAboutMe: FC< propsType> = props => {
    return (
        <div className={classes.rootTextInfo}>
            <div className={`${classes.textInfo} ${classesBriefInfo.textInfo}`}>
                <TextInfo title={props.title} text={props.text} />
            </div>
        </div>
    )
}

export default HomeAboutMe

type propsType={
    title:string
    text:string
}