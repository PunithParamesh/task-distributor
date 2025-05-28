import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Welcome to the Admin Dashboard!</h2>
      <p className={styles.paragraph}>
        This interface allows you to manage agents, upload contact lists, and track task distribution efficiently.
        As an administrator, you can add new agents with their contact details, upload CSV or Excel files containing
        customer data, and the system will automatically assign tasks evenly across all available agents.
        Use the navigation bar above to get started — whether you're reviewing assigned tasks, managing your team,
        or uploading new data, everything you need is just a click away. Stay organized and streamline your workflow
        with ease!
      </p>
    </div>
  );
};

export default Dashboard;
