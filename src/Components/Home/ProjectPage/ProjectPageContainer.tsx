import {connect, ConnectedProps} from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import ProjectPage from './ProjectPage'

const mapStateToProps=(state:AppStateType)=>{
    return{

    }
}

const connector=connect(mapStateToProps,{})

export default connector(ProjectPage)

export type ProjectPagePropsType=ConnectedProps<typeof connector>