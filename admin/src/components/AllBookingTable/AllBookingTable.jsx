import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../BookingComp/Search/Search';
import './AllBookingTable.css'; 

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

  const handleSearch = (searchTerm) => {
    const filteredRows = data.filter((row) => {
      // Customize this logic based on your search requirements
      return (
        row.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredRows);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Function to handle opening the modal with row data
  const handleOpenModal = (rowData) => {
    openModal(rowData); // Pass the row data to openModal function
  };

  const handleDeleteRow = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/deleteBookingRequest/${id}`);
      // If deletion is successful, refetch data to update the table
      fetchData();
    } catch (error) {
      console.error(error);
    }
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
          <Search handleSearch={handleSearch}/>
          <button className='gReportbtn'>Generate Report</button>
        </div>
        <div className='scroll'>
          <table className='bookingList'>
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
                  <td>{row.bookingId}</td>
                  <td>{row.ownerName}</td>
                  <td>{row.serviceType}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{formatDate(row.date)}</td>
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
