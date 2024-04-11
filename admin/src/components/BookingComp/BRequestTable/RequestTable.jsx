import React, { useState } from 'react';
import './RequestTable.css';
import Search from '../Search/Search';
import DescriptionIcon from '@mui/icons-material/Description';


function Table({openModal}) {
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
    {
      id: 2,
      Bid: '002',
      Name: 'Dilshan',
      ServiceType: 'Cleaning',
      Phone: '123-456-7890',
      Email: 'john@example.com',
      Date: '2024-04-04',
      Time: '10:00 AM',
      Status: 'Accepted'
    }
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

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchTerm) => {
    const filteredRows = data.filter((row) => {
      // Customize this logic based on your search requirements
      return Object.values(row).some(
        (value) => value.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    });
    setFilteredData(filteredRows);
  };

  const handleDeleteRow = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  const handleUpdateRow = (id, newData) => {
    setData(data.map(row => (row.id === id ? { ...row, ...newData } : row)));
  };
  
  return (

    <div className='booking'>
      <div className="tblContainer">
        <div className='line-one'>
      <button onClick={handleAddRow}>Add Row</button>
      <Search handleSearch={handleSearch}/>
      <button className='gReportbtn'>Generate Report</button>
      </div>
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
          {filteredData.map((row) => (
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
              
              <button className='view' onClick={openModal}>View</button>
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
