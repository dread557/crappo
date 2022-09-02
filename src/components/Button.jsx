import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='h-[52px] w-[132px] bg-[#3671E9] rounded-[32px] hover:bg-[#7272dc]'>{children}</button>
    )
}

export default Button