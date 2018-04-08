var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class Display extends React.Component {
  render() {
    return (
      <div>0</div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <input type="button" value="+" />
        <input type="button" value="-" />
        <input type="button" value="Reset" />
      </div>
    );
  }
}

class Counter extends React.Component {
  render() {
    return (
      <div className="container">
        <Display />
        <Action />
      </div>
    );
  }
}


ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)
