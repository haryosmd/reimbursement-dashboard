import React from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import TableData from '../components/TableData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div className='flex min-w-full min-h-screen bg-gray-800'>
      {/* SideBar / Navbar */}
      <SideBar />
      <main className='flex flex-col flex-1 gap-6 p-4'>
        {/* Header */}
        <Header />
        <hr className='border-gray-700' />
        <Routes>
          <Route path='/' element={<TableData />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        {/* Content */}
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
