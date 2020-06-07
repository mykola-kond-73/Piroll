import React, { FC } from 'react'
import TextInfo from '../../Fragment/TextInfo/TextInfo'
import { Props } from './HomeAboutMeContainer'
import src from '../../../media/images/alesia-kazantceva-E8dAbseeFLo-unsplash.jpg'
import Image from '../../Fragment/Image/Image'

const HomeAboutMe: FC<Props> = props => {
    return (
        <div>
            <div>
                <TextInfo title={props.title} text={props.text} />
            </div>
            <div>
                <Image src={src} alt='***' />
            </div>
        </div>
    )
}

export default HomeAboutMe