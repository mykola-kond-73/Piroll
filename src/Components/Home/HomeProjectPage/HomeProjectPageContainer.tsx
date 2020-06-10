import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { actionsProject } from '../../../redux/redusers/projectReducer'
import ProjectPageContainer from '../../Work/ProjectPage/ProjectPageContainer'
import { getFaceProgect } from '../../../redux/redusers/projectReducer'
import { AppStateType } from '../../../redux/redux'
import { getPageSize } from '../../../redux/selectors/projectSelector'
import {incrementFunction} from '../../../Untils/Until'

class HomeProjectPageContainer extends React.Component<Props>{

    getProgectContent() {
        this.props.getFaceProgect(this.props.pageSize)
    }

    componentDidMount() {
        this.getProgectContent()
    }

    componentDidUpdate(prevProps: Props) {
        if(prevProps.pageSize != this.props.pageSize){
            this.getProgectContent()
        }
    }

    updatePageSize() {
        // this.props.updatePageSize(this.props.pageSize + 8)
        this.props.incrementFunction(this.props.updatePageSize,8,this.props.pageSize)

    }

    render() {
        return (
            <div>
                {/* //! >>>
                //! >>> ВИПРАВИТИ !!!!!
                //! >>> 
                */}
                //@ts-ignore
                <ProjectPageContainer updatePageSize={this.updatePageSize} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        pageSize: getPageSize(state)
    }
}

const updatePageSize = actionsProject.updatePageSize

const connector = connect(mapStateToProps, { updatePageSize, getFaceProgect,incrementFunction })

export default connector(HomeProjectPageContainer)

type Props = ConnectedProps<typeof connector>