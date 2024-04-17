import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const IssuesTable = ( {issues }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounded-md'>No</th>
        <th className='border border-slate-600 rounded-md'>Issue Id</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
          Customer Name
        </th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
           NIC
        </th>
        <th className='border border-slate-600 rounded-md'>Contact Number</th>
        <th className='border border-slate-600 rounded-md'>Location</th>
        <th className='border border-slate-600 rounded-md'>Status</th>
        <th className='border border-slate-600 rounded-md'>Operations</th>

      </tr>
    </thead>
    <tbody>
      {issues.map((issue, index) => (
        <tr key={issue._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>
            {index + 1}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {issue.cid}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {issue.Cname}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {issue.Cnic}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {issue.Ccontact}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {issue.Clocation}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {issue.Cstatus}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
              <Link to={`/issues/details/${issue._id}`}>
                <BsInfoCircle className='text-2xl text-green-800' />
              </Link>
              <Link to={`/issues/edit/${issue._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-600' />
              </Link>
              <Link to={`/issues/delete/${issue._id}`}>
                <MdOutlineDelete className='text-2xl text-red-600' />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>  )
}

export default IssuesTable