import React, { useState } from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import TopBar from '../../../components/TopBar/TopBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from '../../../components/Canvas/Canvas';

const Home = () => {
    const [selected, setSelected] = useState(null);
    const [items, setItems] = useState([]);

    const handleSelection = type => {
        setSelected(type);
    };

    const handleDrop = item => {
        // console.log('Dropped item in the drop target', item);
        setItems(prevItems => [...prevItems, item]);
        setSelected(item.type);
    };

    return (
        <div>
            <TopBar></TopBar>
            <DndProvider backend={HTML5Backend}>
                <div className='flex'>
                    <SideBar handleSelection={handleSelection}></SideBar>
                    <Canvas items={items} selected={selected} handleDrop={handleDrop}></Canvas>
                </div>
            </DndProvider>
        </div>
    );
};

export default Home;