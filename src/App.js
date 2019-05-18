import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Index = () => (
  <h1>Hello World</h1>
)

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Index}/>
      </div>
    </Router>

  );
}

export default App;
