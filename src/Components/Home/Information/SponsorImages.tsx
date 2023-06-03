import React, { FC } from 'react'
import classes from './SponsorImages.module.css'
import Image from '../../Fragment/Image/Image'

const SponsorImages: FC<propsType> = props => {
    return (
        <div className={classes.container}>
            {props.images.map((elem,index) => {
                return (
                    <div className={classes.items} key={index}>
                        <Image src={elem} alt='***' />
                    </div>
                )
            })
            }
        </div>
    )
}

export default SponsorImages

type propsType = {
    images: Array<string>
}