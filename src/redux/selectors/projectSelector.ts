import { AppStateType } from "../redux";

export const getHomeProject=(state:AppStateType)=>{
    return state.project.homeProject
}

export const getProgectPage=(state:AppStateType)=>{
    return state.project.progectPage
}

export const getPageSize=(state:AppStateType)=>{
    return state.project.pageSize
}

export const getTotalProjectCount=(state:AppStateType)=>{
    return state.project.tototalProjectCount
}