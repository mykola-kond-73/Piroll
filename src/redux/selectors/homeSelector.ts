import { AppStateType } from "../redux";

export const getTitleBrief = (state: AppStateType) => {
    return state.home.titleBrief
}

export const getTextBrief = (state: AppStateType) => {
    return state.home.textBrief
}

export const getTextButtonBrief = (state: AppStateType) => {
    return state.home.textButtonBrief
}

export const getTitleHomeAboutMe = (state: AppStateType) => {
    return state.home.titleHomeAboutMe
}

export const getTextHomeAboutMe = (state: AppStateType) => {
    return state.home.textHomeAboutMe
}

export const getDesign = (state: AppStateType) => {
    return state.home.design
}

export const getDevelopment = (state: AppStateType) => {
    return state.home.development
}

export const getMarketing = (state: AppStateType) => {
    return state.home.marketing
}

export const getReview = (state: AppStateType) => {
    return state.home.reviews
}

export const getIsFetching = (state: AppStateType) => {
    return state.home.isFetching
}

export const getServices = (state: AppStateType) => {
    return state.home.services
}

export const getAboutMeHeaderTitle = (state: AppStateType) => {
    return state.home.aboutMeHeaderTitle
}

export const getAboutMeBodyTitle = (state: AppStateType) => {
    return state.home.aboutMeBodyTitle
}

export const getAboutMeBodyText = (state: AppStateType) => {
    return state.home.aboutMeBodyText
}

export const getAboutMeNeedProjectTitle = (state: AppStateType) => {
    return state.home.aboutMeNeedProjectTitle
}

export const getAboutMeNeedProjectText = (state: AppStateType) => {
    return state.home.aboutMeNeedProjectText
}