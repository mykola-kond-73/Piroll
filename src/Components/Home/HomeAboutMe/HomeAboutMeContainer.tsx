import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import HomeAboutMe from './HomeAboutMe'
import { getTitleHomeAboutMe, getTextHomeAboutMe } from '../../../redux/selectors/homeSelector'

const mapStateToProps = (state: AppStateType) => {
    return {
        title: getTitleHomeAboutMe(state),
        text: getTextHomeAboutMe(state)
    }
}

const connector = connect(mapStateToProps, {})

export default connector(HomeAboutMe)

export type Props = ConnectedProps<typeof connector>