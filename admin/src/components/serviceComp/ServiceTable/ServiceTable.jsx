import React from 'react';
import './ServiceTable.css';
 

const ServiceTable = () => {
    const services = [
        { title: 'Body Wash',image:'img', hour: '1h - 2h', description: 'Specifically targeted at all entry level vehicle range covering the Auto Miraj exclusive 17-point inspection checklist which ...' },
        { title: 'Engine Tune ups',image:'img', hour: '2h-3h', description: 'If you are searching for a long-lasting ride barring any problems and to preserve your car’s/vehicle’s emissions low and gas effectivity high, engine tune-ups are essential.' },
        { title: 'Spare Parts Replacement',image:'img', hour: '1h-3h', description: 'If you are searching for a long-lasting ride barring any problems and to preserve your car’s/vehicle’s emissions low and gas effectivity high, engine tune-ups are essential.' }
    ];

    return (
        <div className='service'>     
       <div className="btblContainer">
       <table>
         <thead>
           <tr>
           <th></th>
           <th>Service Title</th>
           <th>Image</th>
           <th>Estimated Hour</th>
           <th>Description</th>
           <th>Action</th>
           </tr>
         </thead>
         <tbody>
         {services.map((service, index) => (
                     <tr key={index}  className='rwhover'>
                        <td>{<input onClick={() => handleServiceClick(service)} className='ckbox' type='radio' name='all'></input>}</td>
                        <td>{service.title}</td>
                        <td  style={{width:'10rem'}}>{service.image}</td>
                        <td>{service.hour}</td>
                        <td >{service.description}</td>
                        <td style={{width:'8.5rem'}}>
            
                       <button className='accept' >Update</button>
                       <button className='delete' >Delete</button>
               
                       </td>
                     </tr>
                 ))}
         </tbody>
       </table>
       </div>
     </div>



    );
}

export default ServiceTable;
