import React from 'react'

const Card = ({ content }) => {
    const { Title, type } = content
    return (
        <div className='bg-gradient-to-b from-[#1C1615] to-[#0A0807] rounded-md min-h-[500px] mx-10'>
            <h1 className='text-white'>{Title}</h1>
        </div>
    )
}

export default Card;