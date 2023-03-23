import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    show: false,
  };
  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>show my profile </button>
        {this.state.show ? <Show /> : null}
      </div>
    );
  }
}

class Show extends Component {
  state = {
    fullName: "Amine sradkia",
    bio: "this is my bio",
    imgSrc:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    profession: "IT",
    count: 0,
  };
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>{this.state.fullName}</div>
        <div>{this.state.bio} </div>
        <div>{this.state.profession} </div>
        <div>
          <img src={this.state.imgSrc} alt="imag" />
        </div>
        <h1>The component has been rendered for {this.state.count} seconds</h1>
      </div>
    );
  }
}
