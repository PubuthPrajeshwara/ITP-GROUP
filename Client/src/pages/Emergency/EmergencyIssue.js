import React from "react";
import { Link } from "react-router-dom";

function EmergencyIssue() {
  

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Emergency Issues</h1>
      <div style={styles.navbar}>
        <Link to="/general" style={styles.navLink} className="nav-link">General Issues</Link>
        <Link to="/eme" style={styles.navLink} className="nav-link">Emergency Issues</Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
}
const styles = {
  container: {
    padding: '2rem',
  },
  title: {
    fontSize: '1.875rem',  // Equivalent to 30px
    marginBottom: '1rem',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  navLink: {
    margin: '0 10px',
    padding: '10px 15px',
    backgroundColor: '#4299e1',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  navLinkHover: {
    backgroundColor: '#3182ce',
  },
};

export default EmergencyIssue;
