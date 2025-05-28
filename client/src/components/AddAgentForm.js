import React, { useState } from 'react';
import styles from '../styles/AddAgentForm.module.css';
import { createAgent } from '../services/api';

const AddAgentForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('adminToken');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await createAgent(form, token);
      setMessage(res.data.message);
      setForm({ name: '', email: '', mobile: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating agent');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add Agent</h2>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
      <input type="text" name="name" placeholder="Agent Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Agent Email" value={form.email} onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Create Agent</button>
    </form>
  );
};

export default AddAgentForm;
