import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './components/Tree';


class App extends Component {
  state = {
    data:[
      {
        text: "Folder 1",
        children: [
          {
            text: "Sub Folder 1",
            children: [
              {
                text: "Sub Sub Folder 1"
              }
            ]
          },
          {
            text: "Sub Folder 2"
          }
        ]
      },
      {
        text: "Folder 2",
        children: []
      }
    ]
  }
  render() {
    return (
      <div className="App">
          <Tree data={this.state.data} />
      </div>
    );
  }
}

export default App;
