import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './category.css';

const category = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    // Navigate to the corresponding page based on the selected option
    if (option === 'Interiour') {
      navigate('/interiour');
    } else if (option === 'Exteriour') {
      navigate('/exteriour');
    } else if (option === 'Car Care') {
      navigate('/carcare');
    }
  };

  const options = [
    { value: 'option1', label: 'Interiour' },
    { value: 'option2', label: 'Exteriour' },
    { value: 'option3', label: 'Car Care' }
  ];

  return (
    <div className="category-container">
      <div className="category-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'All'}
        <span className={`category-icon ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </div>
      {isOpen && (
        <ul className="category-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="category-option"
              onClick={() => handleOptionClick(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default category