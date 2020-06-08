import React, { FC } from 'react'
import classes from './Reviews.module.css'
import { ReviewsPropsType } from './ReviewsContainer'
import Image from '../../Fragment/Image/Image'

const Reviews: FC<ReviewsPropsType> = props => {
    return (
        <div className={classes.reviewContainer}>
            <div>
                {
                    props.reviews.map(elem => {
                        return (
                            <div className={classes.review}>
                                <div>
                                    <Image src={elem.img} alt='***' />
                                </div>
                                <div className={classes.content}>
                                    <div className={classes.value}>
                                        {elem.value}
                                    </div>
                                    <div className={classes.text}>
                                        {elem.text}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reviews