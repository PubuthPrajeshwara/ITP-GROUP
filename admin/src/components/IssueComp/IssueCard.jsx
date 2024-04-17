import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import IssueSingleCard from './IssueSingleCard';


const IssueCard = ({ issues }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {issues.map((item) => (
                <IssueSingleCard key={item._id} issues={item} />

            ))}
        </div>
    )
}

export default IssueCard