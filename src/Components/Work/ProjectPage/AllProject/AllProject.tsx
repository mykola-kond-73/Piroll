import React, { FC } from 'react'
import classes from './AllProject.module.css'
import { ownProps } from '../ProjectPageContainer'
import { NavLink } from 'react-router-dom'
import Image from '../../../Fragment/Image/Image'
import { homeProjectType } from '../../../../redux/redusers/projectReducer'
import src from '../../../../media/icons/png/coffee-cup.png'

const AllProject: FC<propsType & ownProps> = props => {
    return (
        <div>
            <div className={classes.projects}>
                {
                    props.allProject.map((elem, index) => {
                        return (
                            <NavLink to={'work/' + `${elem.projectId}`} >
                                <div className={classes.elem}>
                                        {
                                            elem.img
                                                ? <Image src={elem.img} alt='***' />
                                                : index % 2 === 0
                                                    ? <div style={{ backgroundColor: '#e7e6e4' }}><Image src={src} alt='***' /></div>
                                                    : <div style={{ backgroundColor: '#efefef' }}><Image src={src} alt='***' /></div>
                                        }
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div onClick={() => props.updatePageSize} className={classes.button}>
                <div>
                    LOAD MORE WORK
                </div>
            </div>
        </div>
    )
}

export default AllProject

type propsType = {
    allProject: Array<homeProjectType>
}