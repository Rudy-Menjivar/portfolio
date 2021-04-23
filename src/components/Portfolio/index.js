import React from "react";
import PortfolioCard from "../PortfolioCard";
import ProjData from "../App/data";
import "./StylesPortfolio.css";

const Portfolios = () => {
  return (
    <div className="p-container" id="Portfolio">
      <div className="p-cards">
        {ProjData.map(project =>
          <PortfolioCard
            languages={project.languages}
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            imgAlt={project.imgAlt}
            githubLink={project.githubLink}
            liveSite={project.liveSite}
          />
        )}
      </div>
    </div>
  )
}

export default Portfolios;
