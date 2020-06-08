import React from "react";

class Unsubscribe extends React.Component {
	constructor() {
		super();
		this.state = {
			number: "",
		};
	}

	handleChange = (event) => {
		this.setState({
			number: event.target.value,
		});
	};

	handleDelete = () => {
		fetch("http://localhost:3001/delete", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				number: this.state.number,
			}),
		})
			.then((response) => response.json())
			.then(() => {
				return this.setState({
					number: "",
				});
			});
	};

	render() {
		return (
			<div>
				<h2>If you want to unsubscribe, enter your phone here</h2>
				<input
					type="number"
					placeholder="phone"
					name="number"
					autoComplete="off"
					value={this.state.number}
					onChange={this.handleChange}
				/>
				<input type="submit" onClick={this.handleDelete} />
			</div>
		);
	}
}

export default Unsubscribe;
