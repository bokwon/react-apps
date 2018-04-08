var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class Display extends React.Component {
  render() {
    return (
      <div>{this.props.count}</div>
    );
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange(e) {
    let value = 0;
    if (e.target.value === "+") {
      value = this.props.count + 1;
    } else if (e.target.value === "-") {
      value = this.props.count - 1;
    }

    this.props.onButtonChange(value);
  }

  render() {
    return (
      <div>
        <input type="button" value="+" onClick={this.handleButtonChange} />
        <input type="button" value="-" onClick={this.handleButtonChange} />
        <input type="button" value="Reset" onClick={this.handleButtonChange} />
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 42
    };
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange(value) {
    this.setState({count: value});
  }

  render() {
    return (
      <div className="container">
        <Display count={this.state.count} />
        <Action onButtonChange={this.handleButtonChange} count={this.state.count} />
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)
