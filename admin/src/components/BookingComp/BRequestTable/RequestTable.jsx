// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './RequestTable.css';
// import Search from '../Search/Search';

// function Table() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/allBookingRequest');
//         setData(response.data);
//         setFilteredData(response.data); // Initialize filteredData with all data
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

  const handleSearch = (searchTerm) => {
    const filteredRows = data.filter((row) => {
      // Customize this logic based on your search requirements
      return (
        row.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredRows);
  };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };
//   const handleDeleteRow = async (id) => {
//     try {
//       // Send a DELETE request to your backend API endpoint
//       await axios.delete(`http://localhost:4000/deleteBookingRequest/${id}`);
  
//       // If the request is successful, update the state to remove the deleted row
//       setData(data.filter(row => row._id !== id));
//       setFilteredData(filteredData.filter(row => row._id !== id));
//     } catch (error) {
//       console.error('Error deleting row:', error);
//     }
//   };
  

  const handleUpdateStatus = (id) => {
    // Implement logic to update the status of a booking request with the provided id
    // You might need to make an API call to update the status in your backend
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
                  <td>{formatDate(row.date)}</td>
                  <td>{row.time}</td>
                  <td>{row.status}</td>
                  <td>
                    <button className='accept' onClick={() => handleUpdateStatus(row.id)}>Accept</button>
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

// export default Table;
