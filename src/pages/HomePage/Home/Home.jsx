import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import TopBar from '../../../components/TopBar/TopBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <DndProvider backend={HTML5Backend}>
                <SideBar></SideBar>
            </DndProvider>
        </div>
    );
};

export default Home;