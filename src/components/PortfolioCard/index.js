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
        <a href={githubLink}>Git</a>
        <a href={liveSite}>Live Site</a>
      </div>
    </Card>
  )
}

PortfolioCard.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveSite: PropTypes.string.isRequired,
}