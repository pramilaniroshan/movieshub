import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
const TopBanner = ({ title }) => {
    return (
        <div className='topbanner-bg text-white vhcenter'>
            <div className="overlay"></div>
            <div className="vhcenter flex-col relative z-5 container">
                <div className="text-4xl md:text-6xl font-bold">{title}</div>
                <div className="flex items-center gap-1 mt-3">
                    <Link href='/' ><a className="text-xl md:text-2xl">Home</a></Link>
                    <KeyboardDoubleArrowRightIcon className='text-xl' />
                    <div className="text-xl md:text-2xl">{title}</div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner