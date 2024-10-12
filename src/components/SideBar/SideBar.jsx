import React from 'react';
import { CiImageOn, CiText } from 'react-icons/ci';

const SideBar = () => {

    return (
        <div className='p-4 w-24 bg-gray-200'>
            {/* Text */}
            <div
                className='cursor-pointer mb-2 p-2 bg-white border flex flex-col justify-center items-center'
                draggable
            >
                <CiText className='text-lg' />
                <span className='text-lg'>Text</span>
            </div>

            {/* Image */}
            <div
                className='cursor-pointer mb-2 p-2 bg-white border flex flex-col justify-center items-center'
                draggable
            >
                <CiImageOn className='text-lg' />
                <span className='text-lg'>Image</span>
            </div>
        </div>
    );
};

export default SideBar;