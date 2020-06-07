import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import { getTitleBrief, getTextBrief, getTextButtonBrief } from '../../../redux/selectors/homeSelector'
import BriegInfo from './BriefInfo'

const mapStateToProps=(state:AppStateType)=>{
    return{
        title:getTitleBrief(state),
        text:getTextBrief(state),
        textButton:getTextButtonBrief(state)
    }
}

const connector=connect(mapStateToProps,{})

export default connector(BriegInfo)

export type Props=ConnectedProps<typeof connector>