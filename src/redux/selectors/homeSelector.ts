import { AppStateType } from "../redux";

export const getTitleBrief=(state:AppStateType)=>{
    return state.home.titleBrief
}

export const getTextBrief=(state:AppStateType)=>{
    return state.home.textBrief
}

export const getTextButtonBrief=(state:AppStateType)=>{
    return state.home.textButtonBrief
}

export const getTitleHomeAboutMe=(state:AppStateType)=>{
    return state.home.titleHomeAboutMe
}

export const getTextHomeAboutMe=(state:AppStateType)=>{
    return state.home.textHomeAboutMe
}