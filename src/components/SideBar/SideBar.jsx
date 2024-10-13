import React from 'react';
import { useDrag } from 'react-dnd';
import { CiImageOn, CiText } from 'react-icons/ci';
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa';

const draggableItemsTypes = {
    TEXT: 'text',
    IMAGE: 'image'
};

const DraggableItems = ({ type, children, onClick }) => {

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
        onClick={onClick}
        className={`cursor-pointer mb-2 p-2 bg-white border flex flex-col justify-center items-center ${isDragging ? 'opacity-50' : ''}`}
    >
        {children}
    </div>;
}

const SideBar = ({ selected, handleSelection }) => {
    // const [selected, setSelected] = useState(null);

    /* const handleSelection = type => {
        setSelected(type);
    } */

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
                selected === 'text' && (
                    <div className='mt-4 p-4 bg-white border rounded'>
                        <h3 className='mb-2 font-bold'>Text Options</h3>

                        {/* Text Alignment Options */}
                        <div className='flex gap-2 mb-2'>
                            <FaAlignLeft className='cursor-pointer text-lg' title='Align Left' />
                            <FaAlignCenter className='cursor-pointer text-lg' title='Align Center' />
                            <FaAlignRight className='cursor-pointer text-lg' title='Align Right' />
                        </div>

                        {/* Font Tools */}
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
                    </div>
                )
            }

            {/* Submenu for Image Element */}
            {
                selected === 'image' && (
                    <div className='mt-4 p-4 bg-white border rounded'>
                        <h3 className='mb-2 font-bold'>Image Options</h3>

                        {/* Image Upload */}
                        <div className='mb-2'>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Upload Image:</span>
                                </div>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </label>
                        </div>

                        {/* Image Properties */}
                        <div>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Image Size:</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SideBar;