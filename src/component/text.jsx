import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = ({ data }) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/about/${data}`}>About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about/:test_data_url" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = ({ about }) => (
  <div>
    {console.log(about.match.params.test_data_url) + " ABOUT URL"}
    <h2>ABOUT</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        {console.log(match.url + "url 2")}
        <Link to={"topics/rendering"}>Rendering with React</Link>
      </li>
      <li>
        <Link to={"topics/components"}>Components</Link>
      </li>
      <li>
        <Link to={"topics/props-v-state"}>Props v. State</Link>
      </li>
    </ul>

    <Route path={"topics/:topicId"} component={Topic} />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;
