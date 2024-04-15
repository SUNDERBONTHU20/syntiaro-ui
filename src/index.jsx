import React from "react";
import { cva } from "class-variance-authority";
import style from './index.module.css'
const button= cva(style.base,{
    variants:{
    variant:{
        "primary":style.primary,
        "secondary":style.secondary,
        "danger":style.danger
    }    },
    size:{
    "small":style.small,
    "medium":style.medium, 
    "large":style.large,
    },
    defaultVariants:{
     variant:"primary",
     size:"small"   
    }
})

const ButtonComponent=({value,variant,size,className})=>{
    <>
    <button className={button({variant,size,className})}>{value}</button>
    </>

    
}
export default ButtonComponent;