import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/IssueComp/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import IssuesTable from '../../components/IssueComp/IssuesTable';
import IssueCard from '../../components/IssueComp/IssueCard';

const Home = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4000/issues')
      .then((response) => {
        setIssues(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.buttonGroup}>
        <button
          style={styles.button}
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          style={styles.button}
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div style={styles.header}>
        <h1 style={styles.title}>Emergency Issues </h1>
        <Link to='/issues/create'>
          <MdOutlineAddBox style={styles.addButton} />
        </Link>
      </div>
      
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <IssuesTable issues={issues} />
      ) : (
        <IssueCard issues={issues} />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    margin: '1px,'
},
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#90cdf4',
    hover: {
      backgroundColor: '#4299e1',
    },
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.875rem',  // Equivalent to 30px
    margin: '0',
  },
  addButton: {
    color: '#2c5282',
    fontSize: '2.5rem',  // Equivalent to 40px
  },
};

export default Home;
