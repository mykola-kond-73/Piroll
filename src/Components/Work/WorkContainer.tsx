import React, { ComponentType } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../redux/redux'
import { compose } from 'redux'
import { withRouter, RouteComponentProps } from 'react-router'
import ProjectPageContainer from './ProjectPage/ProjectPageContainer'
import SeparatePageContainer from './ProjectPage/SeparatePage/SeparatePageContainer'
import { getPageSize, getWorkTitle, getWorkText, getWorkIsFetching } from '../../redux/selectors/projectSelector'
import { getFaceProgect, actionsProject, getWorkTitleTextContent } from '../../redux/redusers/projectReducer'
import { incrementFunction } from '../../Untils/Until'
import TextInfo from '../Fragment/TextInfo/TextInfo'
import classes from './Work.module.css'
import Preloader from '../Fragment/Preloader/Preloader'
import img from '../../media/icons/png/multimedia.png'

class WorkContainer extends React.Component<Props & PropsType>{

    getProgectContent() {
        let promise = Promise.all([this.props.getFaceProgect(this.props.pageSize), this.props.getWorkTitleTextContent()]).then(() => {
            this.props.updateWorkIsFetching(false)
        })

    }

    componentDidMount() {
        this.getProgectContent()

    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.pageSize != this.props.pageSize) {
            this.getProgectContent()
        }
    }

    componentWillMount() {
        this.props.updateWorkIsFetching(true)
    }

    updatePageSize() {
        this.props.incrementFunction(this.props.updatePageSize, 12, this.props.pageSize)
    }



    render() {
        if (this.props.match.params.projectId) {
            return <SeparatePageContainer />
        } else {
            //*>>> прелоадер 
            // if (this.props.workIsFetching) {
            //     return <Preloader img={img} />
            // }
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
        workText: getWorkText(state),
        workIsFetching: getWorkIsFetching(state)
    }
}

const updateWorkIsFetching = actionsProject.updateWorkIsFetching
const updatePageSize = actionsProject.updatePageSize

const connector = connect(mapStateToProps, {getFaceProgect, updatePageSize, incrementFunction, getWorkTitleTextContent, updateWorkIsFetching  })

export default compose<ComponentType>(
    connector,
    withRouter
)(WorkContainer)

type PathParamsType = {
    projectId: string
}

type PropsType = RouteComponentProps<PathParamsType>

type Props = ConnectedProps<typeof connector>