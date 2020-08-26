import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    greeting: "Hello",
  };
  asyncFunc = () => {
    return Promise.resolve("Hello World!");
  };
  async componentDidMount() {
    this.setState({
      greeting: await this.asyncFunc(),
    });
  }
  render() {
    const { greeting } = this.state;
    return <div>{greeting}</div>;
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
