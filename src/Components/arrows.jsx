import { Link } from 'react-router-dom';
import Arrows from '../Images/Arrows.png';

const ArrowsImg = ({ to }) => {
  if (!to) {
    return <img src={Arrows} alt="Open Categories" className='categories-button' />;
  }

  return (
    <Link to={to} className='categories-button' onClick={(event) => event.stopPropagation()}>
      <img src={Arrows} alt="Open Categories" />
    </Link>
  );
}

export default ArrowsImg;