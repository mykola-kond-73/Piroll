import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import Statistics from './Statistics'
import { getDesign, getDevelopment, getMarketing } from '../../../redux/selectors/homeSelector'

const mapStateToProps = (state: AppStateType) => {
    return {
        design: getDesign(state),
        development: getDevelopment(state),
        marketing: getMarketing(state)
    }
}

const connector = connect(mapStateToProps, {})

export default connector(Statistics)

export type StatisticsPropsType = ConnectedProps<typeof connector>