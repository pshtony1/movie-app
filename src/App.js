import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  state = {
    count: 0,
  };

  add() {
    this.setState((curState) => {
      return {
        count: curState.count + 1,
      };
    });
  }

  minus() {
    this.setState((curState) => {
      return {
        count: curState.count - 1,
      };
    });
  }

  componentDidMount() {
    console.log("Mounted!");
  }

  componentDidUpdate() {
    console.log("Updated!");
  }

  render() {
    console.log("Render");
    return (
      <div className="App">
        <h1>This is Counter</h1>
        <h3>The number is {this.state.count}</h3>
        <button onClick={this.add.bind(this)}>Add</button>
        <button onClick={this.minus.bind(this)}>Minus</button>
      </div>
    );
  }
}

export default App;
