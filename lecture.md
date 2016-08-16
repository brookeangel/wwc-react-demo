# W7D1 - React

---

## Overview
+ Intro to React
+ `React.render`
+ Components
+ JSX
+ Events
+ API Summaries
+ Demo

---

## Intro to React
+ Intuitive, easy, fast
+ JavaScript library for creating UI components
+ NOT an MVC, just the V
+ Keeps a virtual DOM tree, then reconciles with the real DOM

---

## Why Learn React?
+ Deciding which part of the DOM to update is a pain
+ Re-rendering everything normally gives us bad performance
+ This is effortless and fast with React

---

## Getting Started / ReactDOM.render

```js

ReactDOM.render(
  React.createElement('div', {}, "React!"), document.getElementById('some-div')
);

```

+ Add a container element with an `id` for React to render into
+ Only one `ReactDOM.render` for entire _tree_ (one root but infinite children)
+ Replaces the container's `innerHTML`

---

## Reusable Components

```js
  React.createClass({
    render: function () {
      return 'hi it works';
    }
  });
```
+ The view class
+ Created using `React.createClass`
+ Pass in an object, kv pairs become instance methods (this is different in ES6)
+ Create an instance of this class using JSX or createElement
+ MUST implement render - this method should return text or a React element with one root node

---

## render
+ Triggered every time `this.state`/`this.props` change
+ `this.setState({count: this.state.count + 1})` causes render
+ Must return a single root node
+ Common to use `map` for arrays of children
+ Never have to wonder if view is up to date!

---

## Component State

```js
React.createClass({
  getInitialState: function () {
    return {
      welcomeMessage: 'hello'
    };
  },

  render: function () {
    return React.createElement('div', {}, this.state.welcomeMessage);
  }
});
```

+ `getInitialState` should return an object with the intitial state
---

## Component Example

```js
var ClickCounter = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },
  render: function(){
    return (
    React.createElement('div', {},
      React.createElement(
        'button',
        {},
        "CLICK ME"
      ),
      React.createElement('span', {}, this.state.count)
    )
   );
  }
});
```
---

## JSX

+ XML like syntax for describing trees where each node has attributes
+ In React it transpiles to `React.createElement` trees
+ Interpolate functions and values using `{this.state.name}`
+ Gotcha: don't use if/else!
+ Attributes of tags can be accessed as `this.props.name` in child components
```
<div>Yay</div>
//vs
React.createElement('div', {}, "Yay")
```
---

## Component With JSX

```js
var ClickCounter = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  click: function(e) {
    e.preventDefault();
    this.setState({count: this.state.count + 1});
  },
  render: function() {
    return (
      <div>
        <button onClick={this.click}>CLICK ME</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
});
```
---

## Component Cont.
+ No need to `bind`, instance methods automatically bound
+ Several 'lifecycle' methods, `getInitialState`, `componentWillMount`, et.al
+ Main instance properties: `this.state`, `this.props`
+ Props - attributes passed in during creation
+ State - how does it change within its lifetime?
+ Can also use instance variables
+ Most components won't have state

---

## Event Handling
+ `<span onClick={this.handleClick}>Click Me</span>`
+ `onXXX` property where `XXX` is a JS event name
+ Value is some method to be invoked
+ Instance methods are auto bound
+ Passed a synthetic event, behaves identical to jQuery event handling

---

## React API Summary
+ `React.render(<MyComponent/>, document.getElementById("my-container"))`
+ `createClass`
+ `createElement` or jsx

---

## Component API Summary
+ `this.props`
+ `this.state`
+ `render` called automatically when `setState` or new `props`
+ `componentDidMount`, `componentWillUnmount`, etc
+ `this.setState`
+ `getInitialState`
