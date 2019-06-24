import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor () {
    super();
    this.state = {
     text: '',
     todos: [],
     isClicked: false
    };
  }

onClick = (event) => {
  this.setState ({
    isClicked: true,
    todos: this.state.todos.concat(this.state.text),
    text: ''
  })
}

onChange = (event) => {
  this.setState ({
    text: event.target.value
  });
}

render() {
  return (
        <div className="App">
          {this.state.todos.map(function(value) {
            return (
              <p>{value}</p>
            );
          })}
          
          <input value={this.state.text} onChange={this.onChange}/>
          <button onClick={this.onClick}>click me!</button>
        </div>
      );
    }
  }

export default App;
