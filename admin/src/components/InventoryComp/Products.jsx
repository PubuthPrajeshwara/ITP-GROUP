import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../Product.css';

export default function Products() {
    const [productData, setProductData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [deletedItemId, setDeletedItemId] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (deleteAlert) {
            const timer = setTimeout(() => {
                setDeleteAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [deleteAlert]);

    const getProducts = async () => {
        try {
            const res = await fetch("http://localhost:3001/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                console.log("Data Retrieved.");
                const data = await res.json();
                setProductData(data);
            } else {
                console.log("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/deleteproduct/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                console.log("Product deleted");
                setDeletedItemId(id);
                setDeleteAlert(true);
                getProducts();
            } else {
                console.log("Error deleting product");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDownloadInvoice = (itemId) => {
        console.log("Downloading invoice for item ID:", itemId);
        window.location.href = `http://localhost:3001/invoice/${itemId}`;
    };

    const handleGenerateReport = () => {
        const input = document.getElementById('report-table');
        const tableHeader = input.querySelector('thead');
        const container = document.createElement('div');
        container.style.marginTop = '20px';
        container.style.marginLeft = '30px';
        container.style.marginRight = '20px';
        container.style.marginBottom = '20px';
        container.style.textAlign = 'center';

        const tableTitle = document.createElement('div');
        tableTitle.textContent = 'Stock Report';
        tableTitle.style.fontSize = '24px';
        tableTitle.style.marginBottom = '20px';

        container.appendChild(tableTitle);
        const tableClone = input.cloneNode(true);
        const tableRows = tableClone.getElementsByTagName('tr');
        for (let i = 0; i < tableRows.length; i++) {
            const lastCellIndex = tableRows[i].cells.length - 1;
            tableRows[i].deleteCell(lastCellIndex);
        }
        container.appendChild(tableClone);
        document.body.appendChild(container);

        html2canvas(container).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'letter');
            const imgWidth = 595.28;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("stock_report.pdf");
            document.body.removeChild(container);
        });
    };

    const filteredProducts = productData.filter(product => product.ItemID.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <><div className='urlBar'><h3>Iventory / Overview</h3></div>
        <div className='container-fluid p-5'>
            <h1 className="mb-4">All Stocks</h1>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search by Item ID" onChange={handleSearch} />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <NavLink to="/insertproduct" className='btn btn-primary fs-5 text-white'>
                    <i className="fa-solid fa-plus me-2"></i>Add New Product
                </NavLink>
                <button className="btn btn-success fs-5" onClick={handleGenerateReport}>
                    <i className="fa-solid fa-file me-2"></i>Generate Report
                </button>
            </div>
            <div className="overflow-auto" style={{ maxHeight: "600px" }}>
                <table id="report-table" className="custom-table">
                    <thead>
                        <tr>
                            <th scope="col">Item ID</th>
                            <th scope="col">Item Type</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Vendor</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td>
                                    <button className="btn btn-link" onClick={() => handleDownloadInvoice(product.ItemID)}>
                                        {product.ItemID}
                                    </button>
                                </td>
                                <td>{product.ItemType}</td>
                                <td>{product.ItemName}</td>
                                <td>{product.Vendor}</td>
                                <td>{product.UnitPrice}</td>
                                <td>{product.Description}</td>
                                <td className="text-center">
                                    <NavLink to={`/updateproduct/${product._id}`} className="btn btn-warning me-1">
                                        <i className="fa-solid fa-pen-to-square"></i> Update
                                    </NavLink>
                                    <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>
                                        <i className="fa-solid fa-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deleteAlert && (
                <div className="alert alert-success alert-dismissible fade show mt-4" role="alert">
                    Product deleted successfully!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDeleteAlert(false)}></button>
                </div>
            )}
        </div></>
    );
}
