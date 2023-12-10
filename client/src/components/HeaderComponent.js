import React from 'react'
import './HeaderComponent.scss'
const HeaderComponent = ({ header }) => {
    return (
        <main className='h-[60vh] bg-[#d9ecf3] overflow-hidden header_comp'>
            <div className="header_comp2 h-[60vh] flex justify-center items-center">
                <h1 className='text-[4rem] text-[#005659] font-bold'>{header}</h1>
            </div>
        </main>
    )
}

export default HeaderComponent;