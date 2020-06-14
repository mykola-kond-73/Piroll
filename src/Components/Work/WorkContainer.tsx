import React, { ComponentType } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../redux/redux'
import { compose } from 'redux'
import { withRouter, RouteComponentProps } from 'react-router'
import ProjectPageContainer from './ProjectPage/ProjectPageContainer'
import SeparatePageContainer from './ProjectPage/SeparatePage/SeparatePageContainer'
import { getPageSize, getWorkTitle, getWorkText } from '../../redux/selectors/projectSelector'
import { getFaceProgect, actionsProject, getWorkTitleTextContent } from '../../redux/redusers/projectReducer'
import { incrementFunction } from '../../Untils/Until'
import TextInfo from '../Fragment/TextInfo/TextInfo'
import classes from './Work.module.css'

class WorkContainer extends React.Component<Props & PropsType>{

    getProgectContent() {
        this.props.getFaceProgect(this.props.pageSize)
    }

    componentDidMount() {
        this.getProgectContent()
        this.props.getWorkTitleTextContent()
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.pageSize != this.props.pageSize) {
            this.getProgectContent()
        }
    }

    updatePageSize() {
        // this.props.updatePageSize(this.props.pageSize + 12)
        this.props.incrementFunction(this.props.updatePageSize, 12, this.props.pageSize)
    }



    render() {
        if (this.props.match.params.projectId) {
            return <SeparatePageContainer />
        } else {
            return (
                <div className={classes.container}>
                    <div className={classes.textInfo}>
                        <TextInfo title={this.props.workTitle} text={this.props.workText} />
                    </div>
                    <div className={classes.project}>
                        <ProjectPageContainer />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        pageSize: getPageSize(state),
        workTitle: getWorkTitle(state),
        workText: getWorkText(state)
    }
}

const updatePageSize = actionsProject.updatePageSize

const connector = connect(mapStateToProps, { getFaceProgect, updatePageSize, incrementFunction, getWorkTitleTextContent })

export default compose<ComponentType>(
    connector,
    withRouter
)(WorkContainer)

type PathParamsType = {
    projectId: string
}

type PropsType = RouteComponentProps<PathParamsType>

type Props = ConnectedProps<typeof connector>