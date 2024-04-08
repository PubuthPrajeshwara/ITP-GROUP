import React from 'react';
import './ServiceTable.css';
 

const ServiceTable = () => {
    const services = [
        { title: 'Body Wash', hour: '1h - 2h', description: 'Specifically targeted at all entry level vehicle range covering the Auto Miraj exclusive 17-point inspection checklist which ...' },
        { title: 'Engine Tune ups', hour: '2h-3h', description: 'If you are searching for a long-lasting ride barring any problems and to preserve your car’s/vehicle’s emissions low and gas effectivity high, engine tune-ups are essential.' },
        { title: 'Spare Parts Replacement', hour: '1h-3h', description: 'If you are searching for a long-lasting ride barring any problems and to preserve your car’s/vehicle’s emissions low and gas effectivity high, engine tune-ups are essential.' }
    ];

    return (
        <div className='service'>     
       <div className="btblContainer">
       <table>
         <thead>
           <tr>
           <th></th>
           <th>Service Title</th>
           <th>Estimated Hour</th>
           <th>Description</th>
           </tr>
         </thead>
         <tbody>
         {services.map((service, index) => (
                     <tr key={index}  className='rwhover'>
                        <td>{<input onClick={() => handleServiceClick(service)} className='ckbox' type='radio' name='all'></input>}</td>
                        <td>{service.title}</td>
                        <td>{service.hour}</td>
                        <td>{service.description}</td>
                     </tr>
                 ))}
         </tbody>
       </table>
       </div>
     </div>



    );
}

export default ServiceTable;
