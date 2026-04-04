import { useNavigate } from 'react-router-dom';

const ArrowsImg = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (!to) {
      return;
    }

    event.stopPropagation();
    navigate(to);
  };

  return (
    <button type="button" className='categories-button' onClick={handleClick}>
      Open Categories
    </button>
  );
}

export default ArrowsImg;