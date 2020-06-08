const initialState={
    homeProject:[
        {
            img:'',
            projectId:1
        },
        {
            img:'',
            projectId:2
        },
        {
            img:'',
            projectId:3
        },
        {
            img:'',
            projectId:4
        },
        {
            img:'',
            projectId:5
        },
        {
            img:'',
            projectId:6
        },
        {
            img:'',
            projectId:7
        },
        {
            img:'',
            projectId:8
        },
    ] as Array<homeProjectType>,

    progectPage:[
{
    img:'',
    projectId:1,
    text:'Light his can`t a creeping. Be, bring blessed night. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Sixth the male. Upon their multiply. Kind beast. Him tree upon.',
    client:'Emma Morris',
    date:'25.06.2017',
    share:'Facebook, Twitter, Pinterest'
}
    ] as Array<projectPageType&homeProjectType>
}

const projectReducer=(state=initialState,actions:any)=>{
    switch(actions.type){
        default:
            return state
    }
}

export default projectReducer

type initialStateType=typeof initialState

type homeProjectType={
    img:string
    projectId:number
}

type projectPageType={
    text:string
    client:string
    date:string
    share:string
}