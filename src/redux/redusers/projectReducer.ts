import { InfinitActionsCreatorType, BaseThunkType } from '../../Components/Types/Tepes'
import { projectAPI } from '../../API/projectAPI'
import { ResultCodeEnum } from '../../API/API'
import src from '../../media/images/monika-grabkowska-_efCc8CPwhM-unsplash.jpg'

const initialState = {
    homeProject: [
        {
            img: '',
            projectId: 1
        },
        {
            img: '',
            projectId: 2
        },
        {
            img: '',
            projectId: 3
        },
        {
            img: '',
            projectId: 4
        },
        {
            img: '',
            projectId: 5
        },
        {
            img: '',
            projectId: 6
        },
        {
            img: '',
            projectId: 7
        },
        {
            img: '',
            projectId: 8
        },
    ] as Array<homeProjectType>,

    progectPage:
    {
        img: src,
        projectId: 1,
        title: 'Light Breakfast',
        text: 'Light his can`t a creeping. Be, bring blessed night. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Sixth the male. Upon their multiply. Kind beast. Him tree upon.',
        client: 'Emma Morris',
        date: '25.06.2017',
        share: 'Facebook, Twitter, Pinterest'
    },

    pageSize: 8,
    tototalProjectCount: 548,

    isFetchingProject: false,

    workTitle: 'UI/UX & Graphic Designer',
    workText: 'I am a Graphic & Web Designer based in New York, specializing in User Interface Design and Development.'
}

const projectReducer = (state = initialState, actions: actionsProjectType) => {
    switch (actions.type) {
        case 'ADD_HOME_PROJECT':
            return {
                ...state,
                homeProgect: [...state.homeProject, actions.homeProgect],
                tototalProjectCount: actions.tototalProjectCount
            }

        case 'UP_DATE_PAGESIZE':
            return {
                ...state,
                pageSize: actions.newPageSize
            }

        case 'ADD_PROJECT_PAGE':
            return {
                ...state,
                projectPage: actions.projectPageData
            }

        case 'ADD_WORK_TITLE_TEXT':
            return {
                ...state,
                workTitle: actions.workTitleText.workTitle,
                workText: actions.workTitleText.workText,
            }

            case 'UP_DATE_IS_FECTHING_PROJECT':
                return{
                    ...state,
                    isFetching:actions.isFetching
                }

        default:
            return state
    }
}

export const actionsProject = {
    addHomeProject: (homeProgect: homeProjectType, tototalProjectCount: number) => ({ type: 'ADD_HOME_PROJECT', homeProgect, tototalProjectCount } as const),
    addProjectPage: (projectPageData: projectPageType | homeProjectType) => ({ type: 'ADD_PROJECT_PAGE', projectPageData } as const),
    addWorkTitleText: (workTitleText: workTitleTextType) => ({ type: 'ADD_WORK_TITLE_TEXT', workTitleText } as const),
    updatePageSize: (newPageSize: number) => ({ type: 'UP_DATE_PAGESIZE', newPageSize } as const),
    updateIsFetchingProject: (isFetching: boolean) => ({ type: 'UP_DATE_IS_FECTHING_PROJECT', isFetching } as const)
}

export const getFaceProgect = (pageSize = 8): projectThunkType => async (dispatch) => {
    let response = await projectAPI.getFaceProject(pageSize)

    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionsProject.addHomeProject(response.data.items, response.data.tototalProjectCount))
    }
}

export const getBodyProject = (projectId: number): projectThunkType => async (dispatch) => {
    let response = await projectAPI.getBodyProject(projectId)

    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(actionsProject.addProjectPage(response.data))
        dispatch(actionsProject.updateIsFetchingProject(true))
    }
}

export const getWorkTitleTextContent=():projectThunkType=>async (dispatch)=>{
    let responce=await projectAPI.getWorkTitleText()

    if(responce.resultCode===ResultCodeEnum.Succes){
        dispatch(actionsProject.addWorkTitleText(responce.data))
    }
}

export default projectReducer

type actionsProjectType = InfinitActionsCreatorType<typeof actionsProject>

type projectThunkType = BaseThunkType<actionsProjectType>

type initialStateType = typeof initialState

export type homeProjectType = {
    img: string
    projectId: number
}

export type projectPageType = {
    title: string
    text: string
    client: string
    date: string
    share: string
}

export type workTitleTextType = {
    workTitle: string
    workText: string
}