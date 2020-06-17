import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../../redux/redux'
import { getBodyProject, actionsProject } from '../../../../redux/redusers/projectReducer'
import { getProgectPage, getIsFetchingProject } from '../../../../redux/selectors/projectSelector'
import SeparatePage from './SeparatePage'
import Paginator from '../../../Fragment/Paginator/Paginator'
import Preloader from '../../../Fragment/Preloader/Preloader'
import img from '../../../../media/icons/png/multimedia.png'
import classes from './SeparatePage.module.css'

class SeparatePageContainer extends React.Component<Props>{

    componentWillMount() {
        this.props.getBodyProject(+this.props.progectPage.projectId)
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.progectPage.projectId != this.props.progectPage.projectId) {
            this.props.getBodyProject(+this.props.progectPage.projectId)
        }
    }

    render() {
        //*>>> прелоадер
        // if (this.props.isFetchingProject) {
        //     <Preloader img={img} />
        // }
        return (
            <div>
                <div>
                    <SeparatePage progectPage={this.props.progectPage} />
                </div>
                <div  className={classes.paginator}>
                    <Paginator projectId={+this.props.progectPage.projectId} updateIsFetchingProject={() => this.props.updateIsFetchingProject(false)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        progectPage: getProgectPage(state),
        isFetchingProject: getIsFetchingProject(state),
    }
}

const updateIsFetchingProject = actionsProject.updateIsFetchingProject

const connector = connect(mapStateToProps, {getBodyProject, updateIsFetchingProject  })

export default connector(SeparatePageContainer)

type Props = ConnectedProps<typeof connector>