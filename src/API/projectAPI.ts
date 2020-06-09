import { instance, ResponseTypes } from './API'
import { homeProjectType, projectPageType } from '../redux/redusers/projectReducer'

export const projectAPI = {
    getFaceProject(pageSize: number) {
        return instance.get<ResponseTypes<getFaceProjectType>>('').then(response => response.data)
    },
    getBodyProject(projectId:number) {
        return instance.get<ResponseTypes<projectPageType>>('').then(response => response.data)
    }
}

type getFaceProjectType={
    tototalProjectCount:number
    items:homeProjectType
}