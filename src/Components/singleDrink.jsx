import { Link } from "react-router-dom";

const SingleDrink = (props) => {
  const [apiPath, apiQuery] = props.api.split('?');
  const target = {
    pathname: `/cocktailList/${apiPath}`,
    search: apiQuery ? `?${apiQuery}` : ''
  };

  return (
    <Link to={target}>
      <article key={props.id} className={`category ${props.categoryClass}`}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </article>
    </Link>
  );
}

export default SingleDrink;