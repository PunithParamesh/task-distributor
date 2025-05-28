import React, { useEffect, useState } from 'react';
import styles from '../styles/AgentTasks.module.css';
import { getAgentTasks } from '../services/api';

const AgentTasks = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAgentTasks(token);
        setData(res.data);
      } catch (err) {
        console.error('Failed to fetch agent tasks', err);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className={styles.container}>
      <h2>Agent Task Distribution</h2>
      {data.map(({ agent, tasks }) => (
        <div key={agent._id} className={styles.agentCard}>
          <h3>{agent.name} ({agent.email})</h3>
          {tasks.length === 0 ? (
            <p>No tasks assigned.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Phone</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => (
                  <tr key={i}>
                    <td>{task.firstName}</td>
                    <td>{task.phone}</td>
                    <td>{task.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default AgentTasks;
