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

export const getWorkTitle=(state:AppStateType)=>{
    return state.project.workTitle
}

export const getWorkText=(state:AppStateType)=>{
    return state.project.workText
}

export const getIsFetchingProject=(state:AppStateType)=>{
    return state.project.isFetchingProject
}

export const getWorkIsFetching=(state:AppStateType)=>{
    return state.project.workIsFetching
}