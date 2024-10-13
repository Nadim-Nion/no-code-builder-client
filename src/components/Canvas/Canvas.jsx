import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Canvas = () => {
    const [items, setItems] = useState([]);

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ['text', 'image'],
        drop: item => handleDrop(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    const handleDrop = item => {
        // console.log('Dropped item in the drop target', item);
        setItems(prevItems => [...prevItems, item]);
    }

    return (
        <div
            ref={drop}
            className={`flex-1 border-2 border-dashed border-gray-400 h-[3in] p-4 ml-4 ${canDrop ? 'bg-green-100' : ''} ${isOver ? 'bg-green-200' : ''}`}
        >
            <h2 className='text-lg font-bold text-center mt-24'>Canvas Area</h2>
            <div>
                {
                    items.map((item, index) => (
                        <div
                            key={index}
                            className={`border p-2 m-2 ${item.type === 'text' ? 'bg-blue-100' : 'bg-yellow-100'}`}
                        >
                            {item.type === 'text' ? 'This is text item' : 'This is image item'}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Canvas;