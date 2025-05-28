// src/components/AllAgents.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/AllAgents.module.css'
import { getAgents } from '../services/api';

const AllAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('adminToken');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getAgents(token);
          setAgents(res.data);
          setLoading(false)
        } catch (err) {
          console.error('Failed to fetch agents', err);
        }
      };
      fetchData();
    }, [token]);
  

  if (loading) return <p className={styles.loading}>Loading agents...</p>;

  return (
    <div className={styles.container}>
      {agents.length === 0 ? 
      <h2>No Agents added yet</h2> :
      <div className={styles.grid}>
        <h2>All Agents</h2>
        {agents.map((agent) => (
          <div key={agent._id} className={styles.card}>
            <h3>{agent.name}</h3>
            <p><strong>Email:</strong> {agent.email}</p>
            <p><strong>Mobile:</strong> {agent.mobile}</p>
          </div>
        ))}
      </div> }
    </div>
  );
};

export default AllAgents;
