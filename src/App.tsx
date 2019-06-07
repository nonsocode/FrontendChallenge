import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree from "./components/Tree";
import Sortable from "./components/Sortable";
import Collapsible from "./components/Collapsible";

const data = [
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
];

class App extends Component {
	state = {
		data,
		dataText: JSON.stringify(data, null, 2)
	};

	constructor(props) {
		super(props);
	}

	handleChange = e => {
		try {
			const data = JSON.parse(e.target.value);
			this.setState({ data });
		} catch (e) {
			console.error("Invalid Data");
		}
	};
	render() {
		return (
			<div className="App">
				<div>
					<div>
						<h1>Default Tree</h1>
						<Tree data={this.state.data} />
					</div>
					<hr />
					<div>
						<h1>Sorted Tree</h1>
						<Sortable>
							<Tree data={this.state.data} />
						</Sortable>
					</div>
					<hr />
					<div>
						<h1>Collapsible Tree</h1>
						<Collapsible>
							<Tree data={this.state.data} />
						</Collapsible>
					</div>
					<hr />
					<div>
						<h1>Collapsible Sorted Tree</h1>
						<Collapsible>
							<Sortable>
								<Tree data={this.state.data} />
							</Sortable>
						</Collapsible>
					</div>
				</div>
				<div>
					<h4>You can Edit the data to test functionality</h4>
					<textarea
						defaultValue={this.state.dataText}
						onChange={this.handleChange}
						style={{ fontFamily: "monospace", fontSize: 16 }}
					/>
				</div>
			</div>
		);
	}
}

export default App;
