import React, { FC } from 'react'
import classes from './Services.module.css'
import { servicesType } from '../../../redux/redusers/homeReducer'
import Image from '../../Fragment/Image/Image'
import TextInfo from '../../Fragment/TextInfo/TextInfo'

const Services: FC<propsType> = props => {
    return (
        <div className={classes.servicesContainer}>
            <div className={classes.services}>
                {props.services.map(elem => {
                    return (
                        <div className={classes.service} key={elem.title}>
                            <div className={classes.img}>
                                <Image src={elem.img} alt='***' />
                            </div>
                            <div className={classes.text}>
                                <TextInfo title={elem.title} text={elem.text} />
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Services

type propsType = {
    services: Array<servicesType>
}