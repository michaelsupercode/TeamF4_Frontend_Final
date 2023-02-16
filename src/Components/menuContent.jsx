import { Link } from "react-router-dom";

const MenuContent = (props) => {
  return (
    <li key={props.id} className={props.class}> <Link to={`/cocktailList/${props.api}`}>{props.title}</Link></li>
  );
}

export default MenuContent;