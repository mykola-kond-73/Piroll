import React,{FC} from 'react'
import classes from './BriegInfo.module.css'
import Image from '../../Fragment/Image/Image'
import src from '../../../media/images/daniel-korpai-2nxugQEgsOc-unsplash.jpg'

const BriegInfo:FC=()=>{
    return (
        <div>
            <Image src={src} alt='***'/>
        </div>
    )
}

export default BriegInfo