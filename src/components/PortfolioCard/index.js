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
        <a href={githubLink} target="_blank" rel="noreferrer">Git</a>
        <a href={liveSite} target="_blank" rel="noreferrer">Live Site</a>
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