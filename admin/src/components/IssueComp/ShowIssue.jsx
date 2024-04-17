import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/IssueComp/BackButton';
import Spinner from '../../components/IssueComp/Spinner';


const ShowIssue = () => {
  const [issue, setIssue] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/issues/${id}`)
      .then((response) => {
        setIssue(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Issue</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-200 p-4'>
          <div className='my-4' >
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{issue._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Issue ID</span>
            <span>{issue.cid}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Customer Name</span>
            <span>{issue.Cname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>NIC </span>
            <span>{issue.Cnic}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Contact Number </span>
            <span>{issue.Ccontact}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Location </span>
            <span>{issue.Clocation}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Status </span>
            <span>{issue.Cstatus}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(issue.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(issue.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowIssue
