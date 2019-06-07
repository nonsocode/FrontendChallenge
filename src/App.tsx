import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree from "./components/Tree";
import Sortable from "./components/Sortable";
import Collapsible from "./components/Collapsible";

class App extends Component {
	state = {
		data: [
      {
        text: "Movies",
        children: [
          {
            text: "Horror",
            children: [
              {
                text: "Halloween"
              },
              {
                text: "Alien"
              }
            ]
          },
          {
            text: "Action",
            children: [
              {
                text: "Stone Cold"
              },
              {
                text: "Commando"
              }
            ]
          }
        ]
      },
      {
        text: "Books",
        children: [
          {
            text: "Children of time"
          }
        ]
      }
    ]
	};
	render() {
		return (
			<div className="App">
				<div>
					<h1>Default Tree</h1>
					<Tree data={this.state.data} />
				</div>
        <hr/>
        <div>
          <h1>Sorted Tree</h1>
          <Sortable>
            <Tree data={this.state.data} />
          </Sortable>
        </div>
        <div>
          <h1>Collapsible Tree</h1>
          <Collapsible>
            <Tree data={this.state.data} />
          </Collapsible>
        </div>
			</div>
		);
	}
}

export default App;
