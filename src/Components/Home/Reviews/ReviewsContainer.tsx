import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../redux/redux'
import Reviews from './Reviews'
import { getReview } from '../../../redux/selectors/homeSelector'

class ReviewContainer extends React.Component<ReviewsPropsType>{
    render() {
        return (
            <Reviews {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        reviews: getReview(state)
    }
}

const connector = connect(mapStateToProps, {})

export default connector(ReviewContainer)

export type ReviewsPropsType = ConnectedProps<typeof connector>