import Arrows from '../Images/Arrows.png';
import { Link } from 'react-router-dom';

const ArrowsImg = ({ to }) => {
  if (!to) {
    return <img className='arrows' src={Arrows} alt="arrows" />;
  }

  return (
    <Link to={to} onClick={(event) => event.stopPropagation()}>
      <img className='arrows' src={Arrows} alt="arrows" />
    </Link>
  );
}

export default ArrowsImg;