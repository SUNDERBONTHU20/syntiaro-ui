import React from "react";
import { cva } from "class-variance-authority";
import style from './style.module.css';
const button = cva(css.base, {
    variants: {
        variant: {
            primary: style.primary,
            secondary: style.secondary,
            success: style.success,
            danger: style.danger
        }, 
        size: {
            small: style.small,
            medium: style.medium,
            large: style.large
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
})

const Button = ({ value, variant, className, as, href, size, ...props }) => {
    if (size) {
        if (size === "sm") {
            size = "small";
        }
        if (size === "lg") {
            size = "large"
        }
        if (size === "medium") {
            size = "medium"
        }
    }
    if (as === "input") {
        return <input className={button({ variant, size, className })} value={value} {...props} />
    }
    if (href) {
        return <a href={href} role="button" className={button({ variant, size, className })} {...props}>{value}</a>
    }
    return (
        <>
            <button className={button({ variant, size, className })}  {...props}>{value}</button>
        </>
    )
};

export default Button;