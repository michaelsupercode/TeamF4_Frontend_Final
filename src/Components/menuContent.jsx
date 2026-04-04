import { Link } from "react-router-dom";

const MenuContent = (props) => {
  const [apiPath, apiQuery] = props.api.split('?');

  return (
    <li key={props.id} className={props.class}> <Link to={{ pathname: `/cocktailList/${apiPath}`, search: apiQuery ? `?${apiQuery}` : '' }}>{props.title}</Link></li>
  );
}

export default MenuContent;