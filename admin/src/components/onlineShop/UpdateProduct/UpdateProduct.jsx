import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import upload_img from '../../../assets/upload_img.png';
import '../AddProduct/AddProduct.css';

const UpdateProduct = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
    description: "",
    quantity: "",
    brand: ""
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/product/${id}`);
        if (response.ok) {
          const data = await response.json();
          if (data.product) {
            setProductDetails(data.product);
          }
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  
  

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const updateProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = { ...productDetails }; // Create a copy of productDetails to avoid mutation

    // If there's a new image selected, upload it
    if (image) {
      let formData = new FormData();
      formData.append('product', image);

      try {
        const uploadResponse = await fetch('http://localhost:4000/upload', {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadResponse.json();
        if (uploadData.success) {
          product.image = uploadData.image_url;
        } else {
          console.error('Image upload failed');
          return; // Stop execution if image upload failed
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        return; // Stop execution if there's an error uploading image
      }
    }

    try {
      const updateResponse = await fetch(`http://localhost:4000/updateproduct/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const updateData = await updateResponse.json();
      if (updateData.success) {
        alert("Product Updated Successfully");
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="Add">
      <Navbar />
      <div className='add-product'>
        <div className='addproduct-itemfield'>
          <div className='addproduct-item'>
            <p>Product Name</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type Name'/>
          </div>
          <div className='addproduct-item'>
            <p>Old Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type old price'/>
          </div>
          <div className='addproduct-item'>
            <p>New Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type new price'/>
          </div>
          <div className='addproduct-item'>
            <p>Brand</p>
            <input value={productDetails.brand} onChange={changeHandler} type='text' name='brand' placeholder='Type brand'/>
          </div>
        </div>
        <div className='addproduct-itemfield'>
          <div className='addproduct-item'>
            <p>Product Description</p>
            <textarea value={productDetails.description} onChange={changeHandler} id="description" name="description" rows="4" cols="50" />
          </div>
          <div className='addproduct-item'>
            <p>Prodcut Category</p>
            <select name="category" className='add-product-selector' value={productDetails.category} onChange={changeHandler}>
              <option value="Interiour">Interiour</option>
              <option value="Exteriour">Exteriour</option>
              <option value="Car_care">Car care</option>
            </select>
          </div>
          <div className='addproduct-item'>
            <p>Product Quantity</p>
            <input value={productDetails.quantity} onChange={changeHandler} type="number" id="quantity" name="quantity" min="0" max="100"/>
          </div>
          <div className='addproduct-item'>
            <label htmlFor="file-input">
              <img src={image ? URL.createObjectURL(image) : productDetails.image} className='addproduct-thumbnail' alt="Upload Thumbnail" />
            </label>
            <input onChange={imageHandler} type='file' name='image' id='file-input' hidden={true} />
          </div>
        </div>
        <button onClick={updateProduct} className='addproduct-btn'>Update Product</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
