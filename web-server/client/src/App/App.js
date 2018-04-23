import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className='container'>
          <h2> Manual Control </h2>
          <ManualControl />
        </div>
      </div>
    );
  }
}

export default App;