export const incrementFunction:(func:(param:number)=>void,increment:number,params:number)=>void=function (func,increment,params){
    return func(params+increment)
}