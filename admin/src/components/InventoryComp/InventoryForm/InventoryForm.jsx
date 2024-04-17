import React, { useState } from "react";
import axios from "axios";
import "./InventoryForm.css";

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemType: "",
    vendor: "",
    unitPrice: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!validateForm()) return;

      await axios.post("http://localhost:4000/allInventory", formData);
      alert("Inventory item added successfully!");
      setFormData({
        itemName: "",
        itemType: "",
        vendor: "",
        unitPrice: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding inventory item:", error);
      alert("An error occurred while adding the inventory item.");
    }
  };

  const validateForm = () => {
    const { itemName, itemType, vendor, unitPrice, description } = formData;

    if (!itemName || !itemType || !vendor || !unitPrice || !description) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(itemName)) {
      alert("Item Name should only contain letters and spaces.");
      return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(itemType)) {
      alert("Item Type should only contain letters and spaces.");
      return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(vendor)) {
      alert("Vendor should only contain letters and spaces.");
      return false;
    }

    if (isNaN(unitPrice) || unitPrice <= 0) {
      alert("Unit Price should be a valid positive number.");
      return false;
    }

    return true;
  };

  return (
    <div className="inventory-form-container">
      <h2>Inventory Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Type:</label>
          <input
            type="text"
            name="itemType"
            value={formData.itemType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Vendor:</label>
          <input
            type="text"
            name="vendor"
            value={formData.vendor}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Unit Price:</label>
          <input
            type="number"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InventoryForm;
