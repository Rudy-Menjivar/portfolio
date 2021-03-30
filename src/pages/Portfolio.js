import React from "react";
import Wrapper from "../components/Wrapper";
import PortfolioCard from "../components/PortfolioCard";
import ProjData from "../components/App/data"

function Portfolio() {
  return (
    <div>
      <h2 className="text-center mt-5">Portfolio</h2>
      <Wrapper>
        {ProjData.map(project =>
        <PortfolioCard
          languages={project.languages}
          key={project.name}
          name={project.name}
          description={project.description}
          githubLink={project.githubLink}
          liveSite={project.liveSite}
        />
      )}
      </Wrapper>
    </div>
  );
};

export default Portfolio;