import { instance, ResponseTypes } from './API'
import { ContactFormDataType } from '../Components/Contact/contactForm/ContactForm'
import { contactInfoType } from '../redux/redusers/contactReducer'

export const ContactAPI={
    postData:(data:ContactFormDataType)=>{
        return instance.post<ResponseTypes<ContactFormDataType>>('').then(responce=>responce.data)
    },
    getContactInfo:()=>{
        return instance.get<ResponseTypes< contactInfoType>>('').then(responce=>responce.data)
    }
} 