import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import  thunkMiddleware from 'redux-thunk' // імпорт проміжного рівня thunk mw
import { reducer as formReducer } from 'redux-form'
import homeReducer from '../redux/redusers/homeReducer'
import projectReducer from './redusers/projectReducer'

type RootReducerType=typeof reducers
export type AppStateType=ReturnType<RootReducerType>

let reducers=combineReducers({
    form: formReducer,
    home:homeReducer,
    project:projectReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store