var React = require('react');

var TodoList = React.createClass({
  render: function () {
    return(
      <ul>
        { this.props.todos.map(function(todo, i) {
          return <li key={i}>{ todo }</li>;
        }) }
      </ul>
    );
  }
});

module.exports = TodoList;
