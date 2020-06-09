import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export enum ResultCodeEnum{
    Succes=0,
    Error=1
}

export enum CaptchaResultCodeEnum{
    Captcha=10
}

//? значення дженерік типів за
export type ResponseTypes<D={},RC=ResultCodeEnum>={
    data:D
    messages:Array<string>
    resultCode:RC
}