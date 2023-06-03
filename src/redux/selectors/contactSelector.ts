import { AppStateType } from "../redux";

export const getDisabled=(state:AppStateType)=>{
    return state.contact.disabled
}

export const getContactTitle=(state:AppStateType)=>{
    return state.contact.contactTitle
}

export const getContactText=(state:AppStateType)=>{
    return state.contact.contactText
}

export const getAddress=(state:AppStateType)=>{
    return state.contact.address
}

export const getEmail=(state:AppStateType)=>{
    return state.contact.email
}

export const getPhone=(state:AppStateType)=>{
    return state.contact.phone
}

export const getFax=(state:AppStateType)=>{
    return state.contact.fax
}

export const getIsFetching=(state:AppStateType)=>{
    return state.contact.isFetching
}