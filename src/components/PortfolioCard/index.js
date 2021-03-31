import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";

export default function PortfolioCard({ languages, name, description, githubLink, liveSite }) {
  return(
    <Card title={name}>
      <div>
        {description}
      </div>
      <div>
        Languages: {languages}
      </div>
      <div>
        <a className="site-links" href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
        <a className="site-links" href={liveSite} target="_blank" rel="noreferrer">Deployed Site</a>
      </div>
    </Card>
  )
}

PortfolioCard.propTypes = {
  languages: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveSite: PropTypes.string.isRequired,
}