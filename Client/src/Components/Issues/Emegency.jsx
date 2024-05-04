// EmergencyIssue.js

import React from "react";
import backgroundImage from '../../assets/slider4.jpg';


function EmergencyIssue() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Emergency Vehicle Service</h1>
        <p style={styles.description}>
          If you have an emergency related to your vehicle, <br></br>please contact us immediately at the following hotline number:
        </p>
        <p style={styles.hotline}>Hotline: 1-800-123-4567</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
    color: "#fff",
  },
  heading: {
    fontSize: "3.3rem",
    marginBottom: "6.5rem",
    marginTop: '0.2rem',
    color: '#1a1a00',
  },
  description: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  hotline: {
    fontSize: "1.25rem",
    color: '#cc3300'
  },
};

export default EmergencyIssue;
