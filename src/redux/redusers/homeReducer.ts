const initialState = {
    titleBrief: 'We Design and Develop',
    textBrief: `We are a new design studio based in USA. We have over 20 years of combined expefience, and know a thing or two about designing websites and mobile apps.`,
    textButtonBrief: 'CONTACT US',

    titleHomeAboutMe:'fff',
    textHomeAboutMe:'ffff',
}

const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}


export default homeReducer

type initialStateType = typeof initialState