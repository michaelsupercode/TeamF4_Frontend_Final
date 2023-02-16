import { Link } from "react-router-dom";

const SingleDrink = (props) => {
  return (
    <Link to={`/cocktailList/${props.api}`}>
      <article key={props.id} className={`category ${props.class}`}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </article>
    </Link>
  );
}

export default SingleDrink;