import React from "react";
import Button from "./components/button";
import "./App.css";

class App extends React.Component {

  state = {
    count: 0,
    error: ''
  }
  componentDidUpdate(){
    console.log(this.state)
  }

  plus = () => {
    if(this.state.count >= 10){
      this.setState({error: 'Cant increase greater than 10'})
    }else {
      this.setState({
        count: this.state.count + 1
      })
    }
    
  };

  minus= () => {
    if(this.state.count <= 0){
      this.setState({error: 'Cant decrease greater than 0'})
    }else {
      this.setState({
        count: this.state.count - 1
      })
    }
  };



  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div className="count">
            <h3>Count</h3>
          </div>
          <div className="section1">
          <div className="buttons">
            <Button title={"-"} click={this.minus} />
          </div>
          <div className="textCount">
          <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"+"} click={this.plus} />
          </div>
          </div>
          <div className="errorM">{this.state.error!==''&&this.state.error}</div>
        </div>
      </div>
    );
  }
}

export default App;
