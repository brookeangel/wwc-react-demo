var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./todo_list');

var App = React.createClass({
  getInitialState: function () {
    return {
      clickCount: 0
    };
  },

  onClickPlus: function (e) {
    e.preventDefault();
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  },

  onClickMinus: function (e) {
    e.preventDefault();
    this.setState({
      clickCount: this.state.clickCount - 1
    });
  },

  render: function () {
    return(
      <div>
        <p>Click Count: {this.state.clickCount}</p>
        <button onClick={this.onClickPlus}>+</button>
        <button onClick={this.onClickMinus}>-</button>
        <TodoList todos={['do laundry', 'do chores', 'do homework']} />
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  ReactDOM.render(React.createElement(App, {}, null), root);
});
