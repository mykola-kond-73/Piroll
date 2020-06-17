import React, { ComponentType } from 'react'
import BriefInfo from './BriefInfo/BriefInfo'
import HomeAboutMe from './HomeAboutMe/HomeAboutMe'
import Statistics from './Statistics/Statistics'
import Reviews from './Reviews/Reviews'
import { AppStateType } from '../../redux/redux'
import { connect, ConnectedProps } from 'react-redux'
import { getHomeContent, getReviewContent } from '../../redux/redusers/homeReducer'
import { getFaceProgect } from '../../redux/redusers/projectReducer'
import { actionsHome,getNeedProjectContent } from '../../redux/redusers/homeReducer'
import {
    getIsFetching, getTitleBrief, getTextBrief,
    getTextButtonBrief, getTitleHomeAboutMe, getTextHomeAboutMe,
    getMarketing, getDevelopment, getDesign,
    getReview, getServices, getImages
} from '../../redux/selectors/homeSelector'
import HomeProjectPageContainer from './HomeProjectPage/HomeProjectPageContainer'
import Preloader from '../Fragment/Preloader/Preloader'
import src from '../../media/icons/png/multimedia.png'
import Services from './Services/Services'
import { compose } from 'redux'
import HomeContactContainer from './HomeContact/HomeContactContainer'
import SponsorImages from './Information/SponsorImages'

class HomeContainer extends React.Component<Props> {
    first() {
        let promise = Promise.all([this.props.getHomeContent(), this.props.getReviewContent(), this.props.getFaceProgect()]).then(() => {
            this.props.updateIsFetching(true)
        })
    }
    componentDidMount() {
        this.first()
    }

    render() {
        //*>>> прелоадер
        // if (!this.props.isFetching) {
        //     return <Preloader img={src} />
        // } 
        return (

            <div>
                <div>
                    <BriefInfo title={this.props.briefInfoTitle} text={this.props.briefInfoText} textButton={this.props.briefInfoTextButton} />
                </div>
                <div>
                    <HomeAboutMe title={this.props.homeAboutMeTitle} text={this.props.homeAboutMeText} />
                </div>
                <div>
                    <Statistics design={this.props.design} development={this.props.development} marketing={this.props.marketing} />
                </div>
                <div>
                    <Reviews reviews={this.props.reviews} />
                </div>
                <div>
                    <HomeProjectPageContainer />
                </div>
                <div>
                    <Services services={this.props.services} />
                </div>
                <div>
                    <SponsorImages images={this.props.images} />
                </div>
                <div>
                    <HomeContactContainer/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: getIsFetching(state),

        briefInfoTitle: getTitleBrief(state),
        briefInfoText: getTextBrief(state),
        briefInfoTextButton: getTextButtonBrief(state),

        homeAboutMeTitle: getTitleHomeAboutMe(state),
        homeAboutMeText: getTextHomeAboutMe(state),

        design: getDesign(state),
        development: getDevelopment(state),
        marketing: getMarketing(state),

        reviews: getReview(state),

        services: getServices(state),
        images:getImages(state)
    }
}

const updateIsFetching = actionsHome.updateIsFething

const connector = connect(mapStateToProps, {getHomeContent, getReviewContent, getFaceProgect, updateIsFetching,getNeedProjectContent})

export default compose<ComponentType>(
    connector,
)(HomeContainer)

type Props = ConnectedProps<typeof connector>