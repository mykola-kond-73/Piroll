import React, {FC} from 'react'
import BriefInfoContainer from './BriefInfo/BriefInfoContainer'
import HomeAboutMeContainer from './HomeAboutMe/HomeAboutMeContainer'
import StatisticsContainer from './Statistics/StatisticsContainer'
import ReviewsContainer from './Reviews/ReviewsContainer'
import ProjectPageContainer from './ProjectPage/ProjectPageContainer'

const Home:FC=()=>{
    return(
        <div>
            <div>
            <BriefInfoContainer/>
            </div>
            <div>
                <HomeAboutMeContainer/>
            </div>
            <div>
                <StatisticsContainer/>
            </div>
            <div>
                <ReviewsContainer/>
            </div>
            <div>
                <ProjectPageContainer/>
            </div>
        </div>
    )
}

export default Home