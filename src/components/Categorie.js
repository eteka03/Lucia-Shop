import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/components/Categorie.scss";

const Categorie = ({
  titre,
  imageUrl,
  size,
  lienCategorie,
  lienUrl,
  history,
  match,
}) => {
  console.log(match);
  return (
    <div
      className={`categorie_item  ${size} col `}
      onClick={() => history.push(`${match.url}/${lienUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl}),url("./logo512.png")` }}
        className={`categorie_image `}
      />
      <div className="categorie_titre">
        <h2 className="titre2">{titre}</h2>
        <a className="categorie lien" href={lienCategorie}>
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default withRouter(Categorie);

Categorie.defaultProps = {
  imageUrl: "./logo512.png",
  size: "small",
};
