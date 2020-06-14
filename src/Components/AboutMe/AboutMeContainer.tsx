import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../redux/redux'
import TextInfo from '../Fragment/TextInfo/TextInfo'
import Reviews from '../Home/Reviews/Reviews'
import Image from '../Fragment/Image/Image'
import AButton from '../Fragment/A_Button/A_Button'
import { getWorkText } from '../../redux/selectors/projectSelector'
import {
    getAboutMeHeaderTitle, getAboutMeBodyTitle, getAboutMeBodyText,
    getAboutMeNeedProjectTitle, getAboutMeNeedProjectText, getReview
} from '../../redux/selectors/homeSelector'
import src from '../../media/images/jonny-caspari-f1URIvy-Yg8-unsplash.jpg'
import classes from './AboutMeContainer.module.css'
import { getWorkTitleTextContent } from '../../redux/redusers/projectReducer'
import { getReviewContent, getAboutMeContent } from '../../redux/redusers/homeReducer'


class AboutMeContainer extends React.Component<Props>{

    getContent() {
        this.props.getAboutMeContent()
        this.props.getWorkTitleTextContent()
    }

    componentDidMount() {
        this.getContent()
    }

    render() {
        return (
            <div className={classes.container}>
                <header>
                    <TextInfo title={this.props.aboutMeHeaderTitle} text={this.props.hesderText} />
                </header>
                <div>
                    <Reviews reviews={this.props.reviews} />
                </div>
                <div className={classes.body}>
                    <div className={classes.bodyImg}>
                        <Image src={src} alt='***' />
                    </div>
                    <div className={classes.bodyText}>
                        <TextInfo title={this.props.aboutMeBodyTitle} text={this.props.aboutMeBodyText} />
                    </div>
                </div>
                <div className={classes.needProject}>
                    <div className={classes.needProjectImg}>
                        <TextInfo title={this.props.aboutMeNeedProjectTitle} text={this.props.aboutMeNeedProjectText} />
                    </div>
                    <div className={classes.needProjectText}>
                        <AButton textButton='LET`S TALK' />
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        aboutMeHeaderTitle: getAboutMeHeaderTitle(state),
        hesderText: getWorkText(state),
        aboutMeBodyTitle: getAboutMeBodyTitle(state),
        aboutMeBodyText: getAboutMeBodyText(state),
        aboutMeNeedProjectTitle: getAboutMeNeedProjectTitle(state),
        aboutMeNeedProjectText: getAboutMeNeedProjectText(state),
        reviews: getReview(state),
    }
}

const connector = connect(mapStateToProps, { getWorkTitleTextContent, getAboutMeContent })

export default connector(AboutMeContainer)

type Props = ConnectedProps<typeof connector>