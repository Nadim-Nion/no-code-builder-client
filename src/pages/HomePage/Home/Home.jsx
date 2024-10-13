import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import TopBar from '../../../components/TopBar/TopBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from '../../../components/Canvas/Canvas';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <DndProvider backend={HTML5Backend}>
                <div className='flex'>
                    <SideBar></SideBar>
                    <Canvas></Canvas>
                </div>
            </DndProvider>
        </div>
    );
};

export default Home;