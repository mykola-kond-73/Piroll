import src1 from '../../media/icons/png/009-bag.png'
import src2 from '../../media/icons/png/008-time.png'
import src3 from '../../media/icons/png/003-star.png'
import src4 from '../../media/icons/png/002-heart.png'

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
            img:src1,
            value: 548
        },

        {
            text: 'WORKING HOURS',
            img:src2,
            value: 1465
        },
        {
            text: 'POSITIVE FEEDBACKS',
            img:src3,
            value: 612
        },
        {
            text: 'HAPPY CLIENTS',
            img:src4,
            value: 735
        }
    ] as Array<reviewsType>
}
type initialStateType = typeof initialState

const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}


export default homeReducer

export type reviewsType = {
    text:string
    img:string
    value:number
}