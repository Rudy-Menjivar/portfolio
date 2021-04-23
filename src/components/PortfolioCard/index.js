import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";

export default function PortfolioCard({ 
  name, 
  description, 
  image, 
  languages, 
  githubLink, 
  liveSite 
}) {
  return(
    <Card title={name}>
      <div>
        {description}
      </div>
      <div className="img-section">
        <img className="proj-image" src={image} alt="project screenshot" />
      </div>
      <div className="lang-section">
        <strong>Languages:</strong> {languages}
      </div>
      <div className="project-links">
        <div className="link-item">
          <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="link-item">
          <a href={liveSite} target="_blank" rel="noreferrer">Website</a>
        </div>
      </div>
    </Card>
  )
}

PortfolioCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  languages: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveSite: PropTypes.string.isRequired,
}