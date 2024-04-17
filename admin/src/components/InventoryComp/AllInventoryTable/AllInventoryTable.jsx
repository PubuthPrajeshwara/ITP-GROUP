import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllInventoryTable({ openModal }) {
  const [allInventory, setAllInventory] = useState([]);

  useEffect(() => {
    const fetchAllInventory = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allInventory');
        setAllInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllInventory();
  }, []);

  const handleOpenModal = (rowData) => {
    openModal(rowData);
  };

  return (
    <div className='all-inventory'>
      <div className="tblContainer">
        <div className='line-one'>
          <select className='myselect' name="Filter">
            <option value="">All</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
          <button className='gReportbtn'>Generate Report</button>
        </div>
        <div className='scroll'>
          <table>
            <thead>
              <tr>
                <th>Inventory ID</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allInventory.map((item) => (
                <tr key={item.inventoryId}>
                  <td>{item.inventoryId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <button className='update' onClick={() => handleOpenModal(item)}>Update</button>
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

export default AllInventoryTable;
