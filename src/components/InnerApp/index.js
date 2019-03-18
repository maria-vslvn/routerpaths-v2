import "../../assets/css/App.css";
import * as React from 'react'
import {Link, Route} from 'react-router-dom'
import {Article} from '../Article/index'

export const InnerApp = ({match}) => {
  return (
    <div>
      <h2>InnerApp</h2>
      <div>
        <Link className="linkStyle" to={`${match.url}/art1`}>Article 1</Link>
        <Link className="linkStyle" to={`${match.url}/art2`}>Article 2</Link>
        <Link className="linkStyle" to={`${match.url}/art3`}>Article 3</Link>
      </div>

      <Route path={`${match.path}/:id`} component={Article} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};