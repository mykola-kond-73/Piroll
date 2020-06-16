import { InfinitActionsCreatorType, BaseThunkType } from "../../Components/Types/Tepes"
import { ContactFormDataType } from "../../Components/Contact/contactForm/ContactForm"
import { ContactAPI } from "../../API/contactAPI"
import { ResultCodeEnum } from "../../API/API"

const initialState = {
    disabled: false,

    contactTitle: 'Contact Info:',
    contactText: 'To give give beginning divide, cattle. Give moving wont, there the abundantly she`d she`d brought air upon. Light hath subdue. Life days creature upon first heaven gathering dry.',
    address: '10111 Santa Monica Boulevard, LA',
    phone: '+44 987 065 908',
    email: 'info@Example.com',
    fax: '+44 987 065 909',

    isFetching: true
}

const contactReducer = (state = initialState, actions:actionContactType ) => {
    switch (actions.type) {
        case 'UP_DATE_DISABLED':
            return {
                ...state,
                disabled: actions.isDisabled
            }

        case 'ADD_CONTACT_INFO':
            return {
                ...state,
                contactTitle: actions.contactInfo.contactTitle,
                contactText: actions.contactInfo.contactText,
                address: actions.contactInfo.address,
                phone: actions.contactInfo.phone,
                email: actions.contactInfo.email,
                fax: actions.contactInfo.fax,
            }

        case 'UP_DATE_IS_FETCHING':
            return {
                ...state,
                isFetching: actions.isFethcing
            }

        default:
            return state
    }
}

export default contactReducer

export const actionContact = {
    updateDisabled: (isDisabled: boolean) => ({ type: 'UP_DATE_DISABLED', isDisabled } as const),
    addContactInfo: (contactInfo: contactInfoType) => ({ type: 'ADD_CONTACT_INFO', contactInfo } as const),
    updateIsFething: (isFethcing: boolean) => ({ type: 'UP_DATE_IS_FETCHING', isFethcing } as const)
}

export const postContactData = (data: ContactFormDataType): contactThunkType => async (dispatch) => {
    let response = await ContactAPI.postData(data)

    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionContact.updateDisabled(false))
    }
}

export const getContactInfo = (): contactThunkType => async (dispatch) => {
    let responce = await ContactAPI.getContactInfo()

    if (responce.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionContact.addContactInfo(responce.data))
        dispatch(actionContact.updateIsFething(false))
    }
}

export type contactInfoType = {
    contactTitle: string
    contactText: string
    address: string
    phone: string
    email: string
    fax: string
}

type actionContactType = InfinitActionsCreatorType<typeof actionContact>

type contactThunkType = BaseThunkType<actionContactType>

type initialStateType = typeof initialState