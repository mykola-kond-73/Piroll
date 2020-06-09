import src1 from '../../media/icons/png/009-bag.png'
import src2 from '../../media/icons/png/008-time.png'
import src3 from '../../media/icons/png/003-star.png'
import src4 from '../../media/icons/png/002-heart.png'
import { BaseThunkType, InfinitActionsCreatorType } from '../../Components/Types/Tepes'
import { homeAPI } from '../../API/homeAPI'
import { ResultCodeEnum } from '../../API/API'

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

    isFetching: false,
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

        default:
            return state
    }
}

export const actionsHome = {
    addHomeContent: (homeContent: homeContentType) => ({ type: 'ADD_HOME_CONTENT', homeContent } as const),
    addReviewsContent: (reviewsContent: reviewsType) => ({ type: 'ADD_REVIEWS_CONTENT', reviewsContent } as const),
    updateIsFething: (isFetching: boolean) => ({ type: 'UP_DATE_IS_FETCHING', isFetching } as const)
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