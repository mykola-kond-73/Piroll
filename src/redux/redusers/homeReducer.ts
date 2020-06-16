import src1 from '../../media/icons/png/009-bag.png'
import src2 from '../../media/icons/png/008-time.png'
import src3 from '../../media/icons/png/003-star.png'
import src4 from '../../media/icons/png/002-heart.png'
import { BaseThunkType, InfinitActionsCreatorType } from '../../Components/Types/Tepes'
import { homeAPI } from '../../API/homeAPI'
import { ResultCodeEnum } from '../../API/API'
import src5 from '../../media/icons/png/004-diamond.png'
import src6 from '../../media/icons/png/001-network.png'
import src7 from '../../media/icons/png/005-smartphone.png'
import src8 from '../../media/icons/png/007-joystick.png'
import src9 from '../../media/icons/png/002-origami.png'
import src10 from '../../media/icons/png/003-star.png'
import src11 from '../../media/icons/png/004-photos.png'
import src12 from '../../media/icons/png/003-edit.png'
import actions from 'redux-form/lib/actions'

const initialState = {
    titleBrief: 'We Design and Develop',
    textBrief: `We are a new design studio based in USA. We have over 20 years of combined expefience, and know a thing or two about designing websites and mobile apps.`,
    textButtonBrief: 'CONTACT US',

    titleHomeAboutMe: 'About Us',
    textHomeAboutMe: 'Divide have don`t man wherein air fourth. Own itself make have night won`t make. A you under Seed appear which good give. Own give air without fowi moveth dry first heaven fruit, dominion she`d won`t very all.',

    design: 75,
    development: 90,
    marketing: 65,

    reviews: [
        {
            text: 'PROJECTS COMPLETED',
            img: src1,
            value: 548
        },

        {
            text: 'WORKING HOURS',
            img: src2,
            value: 1465
        },
        {
            text: 'POSITIVE FEEDBACKS',
            img: src3,
            value: 612
        },
        {
            text: 'HAPPY CLIENTS',
            img: src4,
            value: 735
        }
    ] as Array<reviewsType>,


    services: [
        {
            img: src5,
            title: 'UI / Ux DESIGN',
            text: 'Be set fourth land god darkness make it wherein own'
        },
        {
            img: src6,
            title: 'WEB DEVELOPMENT',
            text: 'A she`d bring void moving third she`d kind fill'
        },
        {
            img: src7,
            title: 'APP / MOBILE',
            text: 'Dominiom man second spirit he, earth they`re creeping'
        },
        {
            img: src8,
            title: 'GAME DESIGN',
            text: 'Morning his saying movent it multiply appear life be'
        },
        {
            img: src9,
            title: 'SEO / MARKETING',
            text: 'Give won`t after land fill creeping meat you, may'
        },
        {
            img: src10,
            title: 'PHOTOGRAPHY',
            text: 'Creepeth one seas cattle grass give moving saw give'
        },
        {
            img: src11,
            title: 'GRAPHIC DESIGN',
            text: 'Open, great whales air rule for, fourth life whales'
        },
        {
            img: src12,
            title: 'ILLUSTRATIONS ',
            text: 'Whales likeness hath, man kind for therm air two won`t'
        },

    ] as Array<servicesType>,

    isFetching: false,

    aboutMeHeaderTitle: 'Amelia Woods',
    aboutMeBodyTitle: 'About me',
    aboutMeBodyText: 'Given let woters air sea had you`ll, may seed abundantly fish. Were you`ll earth forgth wingen above brought. Own darkness they`re him can`t fourth sea palce have. So the Above May stars cattle fruitface face shell. Tree in, winged. Every sings male firmament us. Morneng him.',
    aboutMeNeedProjectTitle: 'Need a Project?',
    aboutMeNeedProjectText: 'Let us know what you`re looking for in an agency. We`ll take a look and see if this could be the start of something beautiful.',

    authMeIsFetching: true

}

const homeReducer = (state = initialState, action: actionsHomeType) => {
    switch (action.type) {
        case 'ADD_HOME_CONTENT':
            return {
                ...state,
                titleBrief: action.homeContent.titleBrief,
                textBrief: action.homeContent.textBrief,
                textButtonBrief: action.homeContent.textButtonBrief,
                titleHomeAboutMe: action.homeContent.titleHomeAboutMe,
                textHomeAboutMe: action.homeContent.textHomeAboutMe,
                design: action.homeContent.design,
                development: action.homeContent.development,
                marketing: action.homeContent.marketing,
            }

        case 'ADD_REVIEWS_CONTENT':
            return {
                ...state,
                reviews: [...state.reviews, action.reviewsContent]
            }

        case 'UP_DATE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        case 'ADD_ABOUT_ME_CONTENT':
            return {
                ...state,
                aboutMeHeaderTitle: action.aboutMeContent.aboutMeHeaderTitle,
                aboutMeBodyTitle: action.aboutMeContent.aboutMeBodyTitle,
                aboutMeBodyText: action.aboutMeContent.aboutMeBodyText,
                
            }

case 'ADD_NEED_PROJECT_CONTENT':
    return{
        ...state,
        aboutMeNeedProjectTitle: action.needProjectContent.aboutMeNeedProjectTitle,
        aboutMeNeedProjectText: action.needProjectContent.aboutMeNeedProjectText
    }

        case 'UP_DATE_AUTH_ME_IS_FETCHING':
            return {
                ...state,
                aboutMeIsFetching: action.aboutMeIsFetching
            }

        default:
            return state
    }
}

export const actionsHome = {
    addHomeContent: (homeContent: homeContentType) => ({ type: 'ADD_HOME_CONTENT', homeContent } as const),
    addReviewsContent: (reviewsContent: reviewsType) => ({ type: 'ADD_REVIEWS_CONTENT', reviewsContent } as const),
    updateIsFething: (isFetching: boolean) => ({ type: 'UP_DATE_IS_FETCHING', isFetching } as const),
    addAboutMeContent: (aboutMeContent: aboutMeType) => ({ type: 'ADD_ABOUT_ME_CONTENT', aboutMeContent } as const),
    updateAuthMeIsFetching: (aboutMeIsFetching: boolean) => ({ type: 'UP_DATE_AUTH_ME_IS_FETCHING', aboutMeIsFetching } as const),
    addNeedProjectContent:(needProjectContent:needProjectContentType)=>({type:'ADD_NEED_PROJECT_CONTENT',needProjectContent}as const)
}

export const getHomeContent = (): homeThunkType => async (dispatch) => {
    let response = await homeAPI.getHomeContent()

    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionsHome.addHomeContent(response.data))
    }
}

export const getReviewContent = (): homeThunkType => async (dispatch) => {
    let response = await homeAPI.getReviewContent()

    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionsHome.addReviewsContent(response.data))
    }
}

export const getAboutMeContent = (): homeThunkType => async (dispatch) => {
    let responce = await homeAPI.getAboutMeContent()

    if (responce.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionsHome.addAboutMeContent(responce.data))
    }
}

export const getNeedProjectContent=():homeThunkType=>async (dispatch)=>{
    let responce=await homeAPI.getNeedProjectContent()

    if(responce.resultCode===ResultCodeEnum.Succes){
        dispatch(actionsHome.addNeedProjectContent(responce.data))
    }
}

export default homeReducer

type actionsHomeType = InfinitActionsCreatorType<typeof actionsHome>

type homeThunkType = BaseThunkType<actionsHomeType>

type initialStateType = typeof initialState

export type reviewsType = {
    text: string
    img: string
    value: number
}

export type homeContentType = {
    titleBrief: string
    textBrief: string
    textButtonBrief: string
    titleHomeAboutMe: string
    textHomeAboutMe: string
    design: number
    development: number
    marketing: number
}

export type servicesType = {
    img: string
    title: string
    text: string
}

export type aboutMeType = {
    aboutMeHeaderTitle: string
    aboutMeBodyTitle: string
    aboutMeBodyText: string
}

export type needProjectContentType={
    aboutMeNeedProjectTitle: string
    aboutMeNeedProjectText: string
}