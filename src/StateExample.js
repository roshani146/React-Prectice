/*====== two way to  state 1. inside the class ->means without constructor
2 inside the constructor */

import React from "react";

class StateExam extends React.Component{
	state = {
		name: "Roshani",
		roll : this.props.roll
	}
	render(){
		return (
			<div>
				<h1> hyy {this.state.name}</h1>
				<h2> hyy {this.state.roll}</h2>
			</div>
			);
	}
}

///inside constructor
 /*class StateExam extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
		name: "Roshani",
		roll : this.props.roll
	}
	
	}
	render(){
		return (
			<div>
				<h1> hyy {this.state.name}</h1>
				<h2> hyy {this.state.roll}</h2>
			</div>
			);
	}
}

*/
export default StateExam;