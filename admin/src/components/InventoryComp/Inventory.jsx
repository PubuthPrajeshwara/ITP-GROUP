import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Inventory() {
    const [inventoryData, setInventoryData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [deletedInventoryId, setDeletedInventoryId] = useState('');
    const [totalUnits, setTotalUnits] = useState(0); 

    useEffect(() => {
        getInventory();
    }, []);

    useEffect(() => {
        if (deleteAlert) {
            const timer = setTimeout(() => {
                setDeleteAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [deleteAlert]);

    useEffect(() => {
        const units = inventoryData.reduce((total, item) => total + item.UnitNo, 0);
        setTotalUnits(units);
    }, [inventoryData]);

    const getInventory = async () => {
        try {
            const res = await fetch("http://localhost:4000/inventory", {  
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                console.log("Data Retrieved.");
                const data = await res.json();
                setInventoryData(data);
            } else {
                console.log("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteInventory = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/deleteinventory/${id}`, {  
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                console.log("Inventory deleted");
                setDeletedInventoryId(id);
                setDeleteAlert(true);
                getInventory();
            } else {
                console.log("Error deleting inventory");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
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
        tableTitle.textContent = 'Inventory Report';
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
            pdf.save("inventory_report.pdf");
            document.body.removeChild(container);
        });
    };

    const downloadInvoice = (id) => { 
        const inventory = inventoryData.find(item => item.InventoryID === id);
        if (inventory) {
            const pdf = new jsPDF();
            pdf.setFontSize(20);
            pdf.text(20, 20, `Invoice for Inventory ID: ${inventory.InventoryID}`);
            
            pdf.setFontSize(12);
            pdf.text(20, 30, `Inventory Type: ${inventory.InventoryType}`);
            pdf.text(20, 40, `Inventory Name: ${inventory.InventoryName}`);
            pdf.text(20, 50, `Vendor: ${inventory.Vendor}`);
            pdf.text(20, 60, `Unit Price: ${inventory.UnitPrice}`);
            pdf.text(20, 70, `Number of Units: ${inventory.UnitNo}`);
            pdf.text(20, 80, `Description: ${inventory.Description}`);
             
    
          
            pdf.save(`invoice_${id}.pdf`);
        }
    };
    

    const filteredInventory = inventoryData.filter(inventory => {
        if (inventory.InventoryID) {
            return inventory.InventoryID.toString().toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
    });

    return (
        <>
            {/* <div className='urlBar'><h3>Inventory / Overview</h3></div> */}
            <div className='container-fluid p-5'>
                <h1 className="mb-4">All Inventory</h1>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Search by Inventory ID" onChange={handleSearch} />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <NavLink to="/insertinventory" className='btn btn-primary fs-5 text-white'>
                        <i className="fa-solid fa-plus me-2"></i>Add New Inventory
                    </NavLink>
                    <button className="btn btn-success fs-5" onClick={handleGenerateReport}>
                        <i className="fa-solid fa-file me-2"></i>Generate Report
                    </button>
                </div>
                <div className="overflow-auto" style={{ maxHeight: "600px" }}>
                    <table id="report-table" className="custom-table">
                        <thead>
                            <tr>
                                <th scope="col">Inventory ID</th>
                                <th scope="col">Inventory Type</th>
                                <th scope="col">Inventory Name</th>
                                <th scope="col">Vendor</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Number of Units</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInventory.map((inventory, index) => (
                                <tr key={index}>
                                    <td onClick={() => downloadInvoice(inventory.InventoryID)}>{inventory.InventoryID}</td>
                                    <td>{inventory.InventoryType}</td>
                                    <td>{inventory.InventoryName}</td>
                                    <td>{inventory.Vendor}</td>
                                    <td>{inventory.UnitPrice}</td>
                                    <td>{inventory.UnitNo}</td>
                                    <td>{inventory.Description}</td>
                                    <td className="text-center">
                                        <NavLink to={`/updateinventory/${inventory._id}`} className="btn btn-warning me-1">
                                            <i className="fa-solid fa-pen-to-square"></i> Update
                                        </NavLink>
                                        <button className="btn btn-danger" onClick={() => deleteInventory(inventory._id)}>
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
                        Inventory deleted successfully!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDeleteAlert(false)}></button>
                    </div>
                )}
            </div>
          
            <div className="total-units" style={{ paddingLeft: '50px' }}>
                <h6>Total Units</h6>
                <span className="badge bg-primary">{totalUnits}</span>
            </div>
        </>
    );
}
