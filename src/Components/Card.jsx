import React from 'react'

const Card = ({ content }) => {
    const { Title, type, Code } = content
    return (
        <div className='bg-gradient-to-b from-[#1C1615] to-[#0A0807] rounded-md min-h-[500px] mx-10 flex items-center justify-center'>
            {Code}
        </div>
    )
}

export default Card;