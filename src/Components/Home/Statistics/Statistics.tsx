import React, { FC } from 'react'
import classes from './Statistics.module.css'
import src from '../../../media/images/alesia-kazantceva-E8dAbseeFLo-unsplash.jpg'
import Image from '../../Fragment/Image/Image'

const Statistics: FC<propsType> = props => {
    return (
        <div className={classes.statistics}>
            <div className={classes.statistic}>
                <div>
                    <h2>
                        Professional Skills
                </h2>
                    <div className={classes.lineBlock}>
                        <span>UI/UX DESIGN  <span>{props.design}%</span></span>
                        <div className={classes.greyLine}>
                            <div className={classes.bluLine} style={{ width: `${props.design}%` }}>
                                &nbsp;
                        </div>
                        </div>
                    </div>
                    <div className={classes.lineBlock}>
                        <span>WEB DEVELOPMENT  <span>{props.development}%</span> </span>
                        <div className={classes.greyLine}>
                            <div className={classes.bluLine} style={{ width: `${props.development}%` }}>
                                &nbsp;
                        </div>
                        </div>
                    </div>
                    <div className={classes.lineBlock}>
                        <span>MARKETING  <span>{props.marketing}%</span> </span>
                        <div className={classes.greyLine}>
                            <div className={classes.bluLine} style={{ width: `${props.marketing}%` }}>
                                &nbsp;
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.img}>
                <div>
                    <Image src={src} alt='***' />
                </div>
            </div>
        </div>
    )
}

export default Statistics

type propsType = {
    design: number
    development: number
    marketing: number
}