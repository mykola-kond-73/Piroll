import React from 'react'
import BriefInfoContainer from './BriefInfo/BriefInfoContainer'
import HomeAboutMeContainer from './HomeAboutMe/HomeAboutMeContainer'
import StatisticsContainer from './Statistics/StatisticsContainer'
import ReviewsContainer from './Reviews/ReviewsContainer'
import ProjectPageContainer from './ProjectPage/ProjectPageContainer'
import { AppStateType } from '../../redux/redux'
import { connect, ConnectedProps } from 'react-redux'
import { getHomeContent, getReviewContent } from '../../redux/redusers/homeReducer'
import { getFaceProgect } from '../../redux/redusers/projectReducer'
import { actionsHome } from '../../redux/redusers/homeReducer'
import { getIsFetching } from '../../redux/selectors/homeSelector'

// todo>>> переробити цю контейнерну компоненту в єдину в цьому дереві  

class HomeContainer extends React.Component<Props> {
    first() {
        let promise = Promise.all([getHomeContent(), getReviewContent(), getFaceProgect()]).then(() => {
            this.props.updateIsFetching(true)
        })
    }
    componentDidMount() {
        this.first()
    }

    componentWillMount() {
        this.props.updateIsFetching(false)
    }

    render() {

        if (!this.props.isFetching) {
            return <div>load</div>
        } else {
            return (

                <div>
                    <div>
                        <BriefInfoContainer />
                    </div>
                    <div>
                        <HomeAboutMeContainer />
                    </div>
                    <div>
                        <StatisticsContainer />
                    </div>
                    <div>
                        <ReviewsContainer />
                    </div>
                    <div>
                        <ProjectPageContainer />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: getIsFetching(state)
    }
}

const updateIsFetching = actionsHome.updateIsFething

const connector = connect(mapStateToProps, { getHomeContent, getReviewContent, getFaceProgect, updateIsFetching })

export default connector(HomeContainer)

type Props = ConnectedProps<typeof connector>