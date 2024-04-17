import React, { useState } from 'react';
import BackButton from '../../components/IssueComp/BackButton';
import Spinner from '../../components/IssueComp/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateIssues = () => {
  const [cid, setcid] = useState('');
  const [Cname, setCname] = useState('');
  const [Cnic, setCnic] = useState('');
  const [Ccontact, setCcontact] = useState('');
  const [Clocation, setClocation] = useState('');
  const [Cstatus, setCstatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!cid.trim()) {
      newErrors.cid = 'Issue ID is required';
      valid = false;
    }

    if (!Cname.trim()) {
      newErrors.Cname = 'Customer Name is required';
      valid = false;
    }

    if (!Cnic.trim()) {
      newErrors.Cnic = 'NIC is required';
      valid = false;
    }

    if (!Ccontact.trim()) {
      newErrors.Ccontact = 'Contact Number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(Ccontact.trim())) {
      newErrors.Ccontact = 'Contact Number should contain exactly 10 numbers';
      valid = false;
    }

    if (!Clocation.trim()) {
      newErrors.Clocation = 'Location is required';
      valid = false;
    }

    if (!Cstatus.trim()) {
      newErrors.Cstatus = 'Status is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSaveIssue = () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      cid,
      Cname,
      Cnic,
      Ccontact,
      Clocation,
      Cstatus,
    };

    setLoading(true);
    axios
      .post('http://localhost:4000/issues', data)
      .then(() => {
        setLoading(false);
        navigate('/issue');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Issue</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Issue ID</label>
          <input
            type='text'
            value={cid}
            onChange={(e) => setcid(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {errors.cid && <p className='text-red-500'>{errors.cid}</p>}
        </div>
         
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Customer Name</label>
          <input
            type='text'
            value={Cname}
            onChange={(e) => setCname(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {errors.Cname && <p className='text-red-500'>{errors.Cname}</p>}
        </div>
        
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>NIC</label>
          <input
            type='text'
            value={Cnic}
            onChange={(e) => setCnic(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {errors.Cnic && <p className='text-red-500'>{errors.Cnic}</p>}
        </div>
        
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Contact Number</label>
          <input
            type='text'
            value={Ccontact}
            onChange={(e) => setCcontact(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {errors.Ccontact && <p className='text-red-500'>{errors.Ccontact}</p>}
        </div>
        
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Location</label>
          <input
            type='text'
            value={Clocation}
            onChange={(e) => setClocation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {errors.Clocation && <p className='text-red-500'>{errors.Clocation}</p>}
        </div>
        
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Status</label>
          <input
            type='text'
            value={Cstatus}
            onChange={(e) => setCstatus(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {errors.Cstatus && <p className='text-red-500'>{errors.Cstatus}</p>}
        </div>
        
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveIssue}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateIssues;
