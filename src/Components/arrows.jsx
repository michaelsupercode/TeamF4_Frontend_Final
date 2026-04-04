import { Link } from 'react-router-dom';

const ArrowsImg = ({ to }) => {
  if (!to) {
    return <span className='categories-button'>Open Categories</span>;
  }

  return (
    <Link to={to} className='categories-button' onClick={(event) => event.stopPropagation()}>
      Open Categories
    </Link>
  );
}

export default ArrowsImg;