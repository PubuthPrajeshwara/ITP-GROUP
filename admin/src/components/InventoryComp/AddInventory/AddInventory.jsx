import React from 'react';
import InventoryNavBar from '../InventoryNavBar/INavBar';
import './AddInventory.css'; 
import InventoryForm from '../InventoryForm/InventoryForm'; 

function AddInventory() {  
  return (
    <div className='add-inventory-container'> {/* Update the CSS class name */}
      <InventoryNavBar/> {/* Correct the component name */}
      <div className='form-container'> {/* Update the CSS class name */}
        <InventoryForm/> {/* Ensure that the InventoryForm component is correctly imported */}
      </div>
    </div>
  );
}

export default AddInventory;
