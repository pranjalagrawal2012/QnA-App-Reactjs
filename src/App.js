import "./App.css";
import Question from "./Question";
import React, { Component } from "react";
import logo from "./friedhead.svg";

class App extends Component {
  state = {
    temp: "",
    question: "What is the world's deepest lake?",
    answer: "Lake Baikal, in Russian Siberia",
  };

  revealAnswerHandler = (event) => {
    console.log(this.state);
    if (this.state.question == this.state.answer) {
      this.setState({ question: this.state.temp });
    } else {
      this.setState({ temp: this.state.question });
      this.setState({ question: this.state.answer });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h1>30 Days of React</h1>
          <h2>Day one / Question and Answer</h2>
          <Question
            question={this.state.question}
            click={this.revealAnswerHandler}
          />
        </header>
      </div>
    );
  }
}

export default App;
