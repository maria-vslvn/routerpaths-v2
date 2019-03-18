import * as React from 'react';

export const Article = ({ match }) => {
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
};