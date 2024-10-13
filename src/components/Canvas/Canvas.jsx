import React from 'react';
import { useDrop } from 'react-dnd';
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa';

const Canvas = ({ items, handleDrop, selected }) => {
    // const [items, setItems] = useState([]);

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ['text', 'image'],
        drop: item => handleDrop(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    /* const handleDrop = item => {
        // console.log('Dropped item in the drop target', item);
        setItems(prevItems => [...prevItems, item]);
    } */

    return (
        <div
            ref={drop}
            className={`flex-1 border-2 border-dashed border-gray-400 h-[3in] p-4 ml-4 ${canDrop ? 'bg-green-100' : ''} ${isOver ? 'bg-green-200' : ''}`}
        >
            <h2 className='text-lg font-bold text-center'>Canvas Area</h2>
            <div>
                {
                    items.map((item, index) => (
                        <div
                            key={index}
                            className={`border p-2 m-2 ${item.type === 'text' ? 'bg-blue-100' : 'bg-yellow-100'}`}
                        >
                            {item.type === 'text' ? (
                                selected === 'text' && (
                                    <>
                                        <h3 className='mb-2 font-bold'>Text Options</h3>
                                        <div className='flex gap-2 mb-2'>
                                            <FaAlignLeft className='cursor-pointer text-lg' title='Align Left' />
                                            <FaAlignCenter className='cursor-pointer text-lg' title='Align Center' />
                                            <FaAlignRight className='cursor-pointer text-lg' title='Align Right' />
                                        </div>
                                        <div className='mb-2'>
                                            <select className="select select-bordered w-full max-w-xs">
                                                <option disabled selected>Font Size:</option>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select className="select select-bordered w-full max-w-xs">
                                                <option disabled selected>Font Style:</option>
                                                <option>Normal</option>
                                                <option>Italic</option>
                                                <option>Bold</option>
                                            </select>
                                        </div>
                                    </>
                                )
                            ) : <>
                                <h3 className='mb-2 font-bold'>Image Options</h3>
                                <div className='mb-2'>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Upload Image:</span>
                                        </div>
                                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                                <div>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Image Size:</option>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                            </>}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Canvas;