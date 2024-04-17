import React, { useState } from 'react';
import './InventoryForm.css';

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    vendor: '',
    unitPrice: '',
    description: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Item Name validation
    if (!formData.itemName) {
      errors.itemName = 'Item Name is required';
      isValid = false;
    }

    // Item Type validation
    if (!formData.itemType) {
      errors.itemType = 'Item Type is required';
      isValid = false;
    }

    // Vendor validation
    if (!formData.vendor) {
      errors.vendor = 'Vendor is required';
      isValid = false;
    }

    // Unit Price validation
    if (!formData.unitPrice) {
      errors.unitPrice = 'Unit Price is required';
      isValid = false;
    } else if (isNaN(formData.unitPrice) || parseFloat(formData.unitPrice) <= 0) {
      errors.unitPrice = 'Unit Price must be a valid positive number';
      isValid = false;
    }

    // Description validation
    if (!formData.description) {
      errors.description = 'Description is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        itemName: '',
        itemType: '',
        vendor: '',
        unitPrice: '',
        description: ''
      });
      setFormErrors({});
    } else {
      console.log('Form submission failed. Please check the fields.');
    }
  };

  return (
    <div className="inventory-form-container">
      <h2>Inventory Form</h2>
      <div className="form-columns">
        <div className="form-column">
          <h3>PRODUCT DETAILS</h3>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Item Name:</label>
            <input
              type="text"
              name="itemName"
              className="form-input"
              placeholder="Item Name"
              value={formData.itemName}
              onChange={handleInputChange}
            />
            {formErrors.itemName && <p className="error-message">{formErrors.itemName}</p>}
            <label className="form-label">Item Type:</label>
            <input
              type="text"
              name="itemType"
              className="form-input"
              placeholder="Item Type"
              value={formData.itemType}
              onChange={handleInputChange}
            />
            {formErrors.itemType && <p className="error-message">{formErrors.itemType}</p>}
            <label className="form-label">Vendor:</label>
            <input
              type="text"
              name="vendor"
              className="form-input"
              placeholder="Vendor"
              value={formData.vendor}
              onChange={handleInputChange}
            />
            {formErrors.vendor && <p className="error-message">{formErrors.vendor}</p>}
            <label className="form-label">Unit Price:</label>
            <input
              type="text"
              name="unitPrice"
              className="form-input"
              placeholder="Unit Price"
              value={formData.unitPrice}
              onChange={handleInputChange}
            />
            {formErrors.unitPrice && <p className="error-message">{formErrors.unitPrice}</p>}
            <label className="form-label">Description:</label>
            <textarea
              name="description"
              className="form-textarea"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.description && <p className="error-message">{formErrors.description}</p>}
            <button type="submit" className="submit-button">Add to Inventory</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InventoryForm;
