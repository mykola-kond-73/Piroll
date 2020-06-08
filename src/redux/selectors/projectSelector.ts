import { AppStateType } from "../redux";

export const getHomeProject=(state:AppStateType)=>{
    return state.project.homeProject
}

export const getProgectPage=(state:AppStateType)=>{
    return state.project.progectPage
}