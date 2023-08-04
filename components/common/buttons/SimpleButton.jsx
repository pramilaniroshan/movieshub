import { CircularProgress } from '@mui/material'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const SimpleButton = ({ children, ...props }) => {
    const { className, ...rest } = props
    return (
        <button disabled={props.loading} className={twMerge(`px-4 py-3 bg-primary gap-2 text-white font-medium inline-flex mt-5`, className)} {...rest}>
            {
                props.loading ?
                    <div className='w-20'>
                        <CircularProgress color='secondary' />
                    </div>
                    : children
            }

        </button>
    )
}

export default SimpleButton