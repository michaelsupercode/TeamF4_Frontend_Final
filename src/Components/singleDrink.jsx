import { useNavigate } from "react-router-dom";

const SingleDrink = (props) => {
  const navigate = useNavigate();
  const target = `/cocktailList/${props.api}`;

  const handleNavigate = () => {
    navigate(target);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(target);
    }
  };

  return (
    <article
      key={props.id}
      className={`category ${props.categoryClass}`}
      role="button"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
}

export default SingleDrink;