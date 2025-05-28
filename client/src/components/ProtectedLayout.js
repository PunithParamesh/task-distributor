// src/components/ProtectedLayout.jsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './Navbar';

const ProtectedLayout = () => {
  const isAuthenticated = localStorage.getItem('adminToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default ProtectedLayout;
