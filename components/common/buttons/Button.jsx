import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Button = ({ url, title, ...props }) => {
    const { className, ...rest } = props
    return (
        <Link passHref href={url} >
            <a className={twMerge(`px-4 py-3 bg-primary gap-2 text-white font-medium inline-flex mt-5`, className)} {...rest}>{title} <ArrowCircleRightIcon /></a>
        </Link>
    )
}

export default Button