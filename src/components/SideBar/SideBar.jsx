import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { CiImageOn, CiText } from 'react-icons/ci';

const draggableItemsTypes = {
    TEXT: 'text',
    IMAGE: 'image'
};

const DraggableItems = ({ type, children }) => {

    const [{ isDragging }, drag] = useDrag({
        type,
        item: { type },
        collect: (monitor) => (
            {
                isDragging: !!monitor.isDragging()
            }
        )
    });

    return <div
        ref={drag}
        className={`cursor-pointer mb-2 p-2 bg-white border flex flex-col justify-center items-center ${isDragging ? 'opacity-50' : ''}`}
    >
        {children}
    </div>;
}

const SideBar = () => {
    const [selected, setSelected] = useState(null);

    const handleSelection = type => {
        setSelected(type);
    }

    return (
        <div className='p-4 w-24 bg-gray-200'>
            {/* Text */}
            <DraggableItems type={draggableItemsTypes.TEXT} onClick={() => handleSelection('text')}>
                <CiText className='text-lg' />
                <span className='text-lg'>Text</span>
            </DraggableItems>

            {/* Image */}
            <DraggableItems type={draggableItemsTypes.IMAGE} onClick={() => handleSelection('image')}>
                <CiImageOn className='text-lg' />
                <span className='text-lg'>Image</span>
            </DraggableItems>

            {/* Submenu for Text Element */}
            {
                selected === 'text' && <>
                    <div className='mt-4 p-4 bg-white border rounded'>
                        <h3 className='mb-2 font-bold'>Text Options</h3>
                    </div>
                </>
            }

            {/* Submenu for Image Element */}
            {
                selected === 'image' && <>
                    <div className='mt-4 p-4 bg-white border rounded'>
                        <h3 className='mb-2 font-bold'>Image Options</h3>
                    </div>
                </>
            }
        </div>
    );
};

export default SideBar;