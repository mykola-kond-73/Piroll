import { instance, ResponseTypes } from './API'
import { homeContentType, reviewsType } from '../redux/redusers/homeReducer'

export const homeAPI = {
    getHomeContent() {
        return instance.get<ResponseTypes<homeContentType>>('').then(response => response.data)
    },
    getReviewContent() {
        return instance.get<ResponseTypes<reviewsType>>('').then(response => response.data)
    }
}