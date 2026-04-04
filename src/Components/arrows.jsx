import Arrows from '../Images/Arrows.png';
import { Link } from 'react-router-dom';

const ArrowsImg = () => {
  return (
    <Link to="/cocktailList/filter.php%3Fi=Vodka" onClick={(event) => event.stopPropagation()}>
      <img className='arrows' src={Arrows} alt="arrows" />
    </Link>
  );
}

export default ArrowsImg;