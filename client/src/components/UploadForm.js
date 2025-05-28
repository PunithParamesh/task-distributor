import React, { useState } from 'react';
import styles from '../styles/UploadForm.module.css';
import { uploadTaskFile } from '../services/api';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem('adminToken');

  const allowedTypes = [
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setError('Only CSV, XLS, and XLSX files are allowed.');
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setError('Please select a valid file');

    try {
      const res = await uploadTaskFile(file, token);
      setMessage(res.data.message);
      setFile(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Upload Task File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv,.xls,.xlsx" onChange={handleFileChange} />
        <button type="submit">Upload & Distribute</button>
      </form>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default UploadForm;
