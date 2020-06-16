export const required:validator=(value)=>{
    if(value) return undefined
    return 'filed is required'
}

type validator=(value:string)=>string|undefined