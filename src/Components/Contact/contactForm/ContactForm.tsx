import React, { FC } from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import Button from '../../Fragment/Button/Button'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import { getDisabled } from '../../../redux/selectors/contactSelector'
import { postContactData, actionContact } from '../../../redux/redusers/contactReducer'
import { required } from '../../../Untils/Validators/Validate'
import classes from './ContactForm.module.css'
import classess from '../../Home/HomeContact/HomeContactContainer.module.css'

const ContactFormContainer: FC<Props> = props => {
    const onSubmit = (formData: ContactFormDataType) => {
        // props.postContactData(formData)
        props.updateDisabled(true)
        console.log(formData)

    }

    return (
        <div>
            <ReduxContactForm onSubmit={onSubmit} disabled={props.disabled} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        disabled: getDisabled(state)
    }
}

const updateDisabled = actionContact.updateDisabled

const connector = connect(mapStateToProps, { postContactData, updateDisabled })

export default connector(ContactFormContainer)

const ContactForm: FC<InjectedFormProps<ContactFormDataType, ownProps> & ownProps> = ({ handleSubmit, error, disabled }) => {
debugger;
    
    return (
        <form onSubmit={handleSubmit} className={classes.from}>
            <div className={classess.field} >
                <div className={classes.name}>
                    <Field name='name' type='text' placeholder='Your Name' component='input' validate={[required]} />
                </div>
                <div className={classes.email}>
                    <Field name='email' type='text' placeholder='Your Email' component='input' validate={[required]} />
                </div>
                <div className={classes.title}>
                    <Field name='title' type='text' placeholder='Your Title' component='input' />
                </div>
                <div className={classes.comment}>
                    <Field name='comment' type='text' placeholder='Your Comment' component='textarea' />
                </div>
            </div>
            <div className={classess.blockButton}>
                <div className={classes.button}>
                    <Button inscription='SEND MESSAGE' disabled={disabled} />
                </div>
            </div>
        </form>
    )
}

const ReduxContactForm = reduxForm<ContactFormDataType, ownProps>({ form: 'contact' })(ContactForm)

type ownProps = {
    disabled: boolean
}

export type ContactFormDataType = {
    name: string
    email: string
    title: string
    comment: string
}

type Props = ConnectedProps<typeof connector>