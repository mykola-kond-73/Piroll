import React, { FC } from 'react'
import classes from './SeparatePage.module.css'
import { homeProjectType, projectPageType } from '../../../../redux/redusers/projectReducer'
import Image from '../../../Fragment/Image/Image'
import ContactTextInfo from '../../../Fragment/ContactTextInfo/ContactTextInfo'

const SeparatePage: FC<propsType> = props => {
    return (
        <div className={classes.container}>
            <div>
                <div className={classes.text}>
                    <ContactTextInfo title={props.progectPage.title}
                        param1={props.progectPage.text}
                        param2={props.progectPage.client}
                        param3={props.progectPage.date}
                        param4={props.progectPage.share}
                        param5={null}
                        param6='Client:'
                        param7='Date:'
                        param8='Share:'
                        param9={null}
                    />
                </div>
                <div className={classes.img}>
                    <Image src={props.progectPage.img} alt='***' />
                </div>
            </div>
        </div>
    )
}

export default SeparatePage

type propsType = {
    progectPage: homeProjectType & projectPageType
}