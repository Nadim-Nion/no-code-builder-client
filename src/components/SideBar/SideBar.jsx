import React from 'react';

const SideBar = () => {

    return (
        <div className='p-4 w-1/4 bg-gray-200'>
            {/* Text */}
            <div
                className='cursor-pointer mb-2 p-2 bg-white border'
                draggable
            >Text</div>

            {/* Image */}
            <div
                className='cursor-pointer mb-2 p-2 bg-white border'
                draggable
            >Image</div>
        </div>
    );
};

export default SideBar;