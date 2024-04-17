import React, { useState, useEffect } from 'react';
import BackButton from '../../components/IssueComp/BackButton';
import Spinner from '../../components/IssueComp/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditIssue = () => {
  const [cid, setcid] = useState('');
  const [Cname, setCname] = useState('');
  const [Cnic, setCnic] = useState('');
  const [Ccontact, setCcontact] = useState('');
  const [Clocation, setClocation] = useState('');
  const [Cstatus, setCstatus] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/issues/${id}`)
    .then((response) => {
        setcid(response.data.cid);
        setCname(response.data.Cname)
        setCnic(response.data.Cnic)
        setCcontact(response.data.Ccontact)
        setClocation(response.data.Clocation)
        setCstatus(response.data.Cstatus)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
    }, [])


  const handleEditIssue = () => {
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
      .put(`http://localhost:4000/issues/${id}`, data)
      .then(() => {
        setLoading(false);
        //enqueueSnackbar('Issue Created successfully', { variant: 'success' });
        navigate('/issue');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        //enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
<div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Update Issue</h1>
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
        </div>
         
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Customer Name</label>
          <input
            type='text'
            value={Cname}
            onChange={(e) => setCname(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> NIC </label>
          <input
            type='text'
            value={Cnic}
            onChange={(e) => setCnic(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Contact Number</label>
          <input
            type='text'
            value={Ccontact}
            onChange={(e) => setCcontact(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Location </label>
          <input
            type='text'
            value={Clocation}
            onChange={(e) => setClocation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Status</label>
          <input
            type='text'
            value={Cstatus}
            onChange={(e) => setCstatus(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditIssue}>
          Save
        </button>
      </div>
    </div>  )
}

export default EditIssue