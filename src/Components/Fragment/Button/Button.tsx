import React,{FC} from 'react'
import classes from './Button.module.css'

const Button:FC<propsType>=props=>{
    return(
        <div className={classes.button}>
            <button>
                {props.inscription}
            </button>
        </div>
    )
}

export default Button

type propsType={
    inscription:string
}