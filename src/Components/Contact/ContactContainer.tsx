import React, { ComponentType } from 'react'
import { AppStateType } from '../../redux/redux'
import { connect, ConnectedProps } from 'react-redux'
import ContactTextInfo from '../Fragment/ContactTextInfo/ContactTextInfo'
import Image from '../Fragment/Image/Image'
import { getContactTitle, getContactText, getAddress, getPhone, getEmail, getFax, getIsFetching } from '../../redux/selectors/contactSelector'
import ContactFormContainer from './contactForm/ContactForm'
import { getContactInfo, actionContact } from '../../redux/redusers/contactReducer'
import { compose } from 'redux'
import classes from './ContactContainer.module.css'
import src from '../../media/images/monika-grabkowska-_efCc8CPwhM-unsplash.jpg'

class ContactContainer extends React.Component<Props>{

    componentDidMount() {
        this.props.getContactInfo()
    }

    componentWillMount() {
        this.props.updateIsFething(true)
    }

    render() {
        //* прелоадер
        // if (this.props.isFetching) {
        //     return <Preloader img={img} />
        // }
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <div>
                        <ContactTextInfo title={this.props.contactTitle}
                            param1={this.props.contactText}
                            param6='Address'
                            param7='Phone'
                            param8='Email'
                            param9='Fax'
                            param2={this.props.address}
                            param3={this.props.phone}
                            param4={this.props.email}
                            param5={this.props.fax} />
                    </div>
                    <div className={classes.formContainer} >
                        <ContactFormContainer />
                    </div>
                </div>
                <div className={classes.img}>
                    <Image src={src} alt='***' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: getIsFetching(state),
        contactTitle: getContactTitle(state),
        contactText: getContactText(state),
        address: getAddress(state),
        phone: getPhone(state),
        email: getEmail(state),
        fax: getFax(state)
    }
}

const updateIsFething = actionContact.updateIsFething

const connector = connect(mapStateToProps, {getContactInfo, updateIsFething  })

export default compose<ComponentType>(
    connector
)(ContactContainer)

type Props = ConnectedProps<typeof connector>