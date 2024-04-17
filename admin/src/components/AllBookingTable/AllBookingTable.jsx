import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../BookingComp/Search/Search';
import DescriptionIcon from '@mui/icons-material/Description';

function Table({ openModal }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allBookingRequest');
        const acceptedData = response.data.filter(row => row.status === 'accepted');
        setFilteredData(acceptedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Function to handle opening the modal with row data
  const handleOpenModal = (rowData) => {
    openModal(rowData); // Pass the row data to openModal function
  };


  return (
    <div className='booking'>
      <div className="tblContainer">
        <div className='line-one'>
        <select className='myselect'
          name="Filter" >
          <option value="">All</option>
          <option value="accepted">accepted</option>
          <option value="ongoing">ongoing</option>
          <option value="completed">completed</option>
          <option value="cancelled">cancelled</option>
        </select>
          <Search />
          <button className='gReportbtn'>Generate Report</button>
        </div>
        <div className='scroll'>
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
                <tr key={row._id}>
                  <td>{row._id}</td>
                  <td>{row.ownerName}</td>
                  <td>{row.serviceType}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                  <td>{row.status}</td>
                  <td>
                  <button className='update' onClick={() => handleOpenModal(row)}>Update</button>
                    <button className='delete' onClick={() => handleDeleteRow(row._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
