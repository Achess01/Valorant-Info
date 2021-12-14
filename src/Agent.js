import { Link } from "react-router-dom";

const Agent = ({ icon, name, uuid }) => {
  return (
    <Link to={`/details/${uuid}`}>
      <article className="Agent">
        <picture>
          <img src={icon} alt={name} width="128px" />
        </picture>
        <h3>{name}</h3>
      </article>
    </Link>
  );
};

export default Agent;
