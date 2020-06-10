import React, { FC } from 'react'
import Image from '../Image/Image'
import srcPrev from '../../../media/icons/png/002-back.png'
import srcNext from '../../../media/icons/png/001-next.png'
import srcToWork from '../../../media/icons/png/003-menu.png'
import { NavLink } from 'react-router-dom'
import classes from './Paginator.module.css'

const Paginator: FC<propsType> = props => {
    return (
        <div className={classes.grid}>
            {props.projectId > 1 ?
                <div onClick={() => props.updateIsFetchingProject()} className={`${classes.buttonProject} ${classes.prev}`}>
                    <NavLink to={`/work/${props.projectId - 1}`}>
                        <div className={classes.inNavLink}>
                            <div>
                                <Image src={srcPrev} alt='***' />
                            </div>
                            <div>
                                PREVIOUS PROJECT
                            </div>
                        </div>
                    </NavLink>
                </div>

                : <div className={`${classes.buttonProject} ${classes.prev}`}>
                    <div className={classes.inNavLink}>
                        <div>
                            <Image src={srcPrev} alt='***' />
                        </div>
                        <div>
                            PREVIOUS PROJECT
                        </div>
                    </div>
                </div>
            }
            <div className={classes.toWork}>
                <NavLink to={`/work`}>
                    <Image src={srcToWork} alt='***' />
                </NavLink>
            </div>
            <div onClick={() => props.updateIsFetchingProject()} className={`${classes.buttonProject} ${classes.next}`}>
                <NavLink to={`/work/${props.projectId + 1}`}>
                    <div className={classes.inNavLink}>
                        <div>
                            NEXT PROJECT
                    </div>
                        <div>
                            <Image src={srcNext} alt='***' />
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Paginator

type propsType = {
    projectId: number
    updateIsFetchingProject: () => void
}