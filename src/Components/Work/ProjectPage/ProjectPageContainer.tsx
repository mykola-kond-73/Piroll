import React, { ComponentType } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import AllProject from './AllProject/AllProject'
import { getHomeProject } from '../../../redux/selectors/projectSelector'
import { actionsProject } from '../../../redux/redusers/projectReducer'
import { compose } from 'redux'

class ProjectPageContainer extends React.Component<Props>{
    render() {
        
        return (
            
            <AllProject allProject={this.props.allProject} updatePageSize={this.props.updatePageSize} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        allProject: getHomeProject(state),
    }
}

const updatePageSize=actionsProject.updatePageSize

const connector = connect(mapStateToProps, {updatePageSize})

export default compose<ComponentType>(
    connector,
)(ProjectPageContainer)

export type ownProps={
    updatePageSize:(newPageSize: number) => {
    type: "UP_DATE_PAGESIZE";
    newPageSize: number
}}

type projectPageContainerPropsType = ConnectedProps<typeof connector>

type Props=projectPageContainerPropsType&ownProps