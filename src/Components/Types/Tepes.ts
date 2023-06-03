import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import { AppStateType } from "../../redux/redux"

export type NullBell<U>=U |null

export type InfinitActionsCreatorType<T>=T extends {[key:string]:(...args:any[])=>infer U}?U:never
 
export type BaseThunkType<A extends Action ,R=void>=ThunkAction<R,AppStateType,unknown,A>