import React, { useState } from 'react';
import './RequestTable.css';

function Table() {
  const [data, setData] = useState([
    {
      id: 1,
      Bid: '001',
      Name: 'John Doe',
      ServiceType: 'Cleaning',
      Phone: '123-456-7890',
      Email: 'john@example.com',
      Date: '2024-04-04',
      Time: '10:00 AM',
      Status: 'Accepted'
    },
    // Add more initial data as needed
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      Bid: '',
      Name: '',
      ServiceType: '',
      Phone: '',
      Email: '',
      Date: '',
      Time: '',
      Status: 'Pending'
    };
    setData([...data, newRow]);
  };

  const handleDeleteRow = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  const handleUpdateRow = (id, newData) => {
    setData(data.map(row => (row.id === id ? { ...row, ...newData } : row)));
  };

  return (

    <div className='booking'>
       <div className='urlBar'><h3>Booking / Overview</h3></div>
      
      <div className="tblContainer">
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={openModal}>Open Modal</button>
      <table>
        <thead>
          <tr>
            <th>Bid</th>
            <th>Name</th>
            <th>Service Type</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
              <tr key={row.id}>
              <td>{row.Bid}</td>
              <td>{row.Name}</td>
              <td>{row.ServiceType}</td>
              <td>{row.Phone}</td>
              <td>{row.Email}</td>
              <td>{row.Date}</td>
              <td>{row.Time}</td>
              <td>{row.Status}</td>
              <td>
                
              <button className='accept' onClick={() => handleDeleteRow(row.id)}>Accept</button>
                <button className='delete' onClick={() => handleDeleteRow(row.id)}>Delete</button>
                {/* You can add more actions here like edit/update */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Table;
