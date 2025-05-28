// src/components/Navbar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Use your module.css for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>Admin Panel</div>
      <div className={styles.links}>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Home
        </NavLink>
        <NavLink to="/agents" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Agents
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Tasks
        </NavLink>
        <NavLink to="/add-agent" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Add Agent
        </NavLink>
        <NavLink to="/upload" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Upload Tasks
        </NavLink>
      </div>
      <div className={styles.navRight}>
        <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
