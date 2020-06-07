import React, { FC } from 'react'

const TextInfo: FC<propsType> = props => {
    return (
        <div >
            <div >{props.title}</div>
            <p >{props.text} </p>
        </div>
    )
}

export default TextInfo

type propsType = {
    title: string
    text: string
}