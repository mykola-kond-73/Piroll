import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import { getAboutMeNeedProjectTitle, getAboutMeNeedProjectText } from '../../../redux/selectors/homeSelector'
import TextInfo from '../../Fragment/TextInfo/TextInfo'
import ContactForm from '../../Contact/contactForm/ContactForm'
import classes from '../../AboutMe/AboutMeContainer.module.css'
import classess from './HomeContactContainer.module.css'

class HomeContactContainer extends React.Component<Props>{
    render() {
        return (
            <div className={`${classes.needProject} ${classess.body}`}>
                <div className={classes.needProjectImg}>
                    <TextInfo title={this.props.aboutMeNeedProjectTitle} text={this.props.aboutMeNeedProjectText} />
                </div>
                <div className={classess.button}>
                    <ContactForm />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        aboutMeNeedProjectTitle: getAboutMeNeedProjectTitle(state),
        aboutMeNeedProjectText: getAboutMeNeedProjectText(state),
    }
}

const connector = connect(mapStateToProps, {})

export default connector(HomeContactContainer)

type Props = ConnectedProps<typeof connector>