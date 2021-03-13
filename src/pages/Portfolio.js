import React from "react";
import NavLinks from "../components/NavLinks";
import Wrapper from "../components/Wrapper";
import PortfolioCard from "../components/PortfolioCard";
import projects from "../components/App/data"

function Portfolio() {
  return (
    <div>
      <NavLinks />
      <h2 className="text-center mt-5">Portfolio</h2>
      <Wrapper>
        {projects.map(project =>
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