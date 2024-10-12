import React from 'react';

const TopBar = () => {
    return (
        <div className='flex justify-around p-4 bg-gray-100 shadow-md my-3 text-white'>
            <button className="btn btn-outline btn-primary">Preview</button>
            <button className="btn btn-outline btn-success">Source Code</button>
        </div>
    );
};

export default TopBar;