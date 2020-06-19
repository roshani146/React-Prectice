import React from "react";
import Mark from "./Update2";

export default class PrentStudent extends React.Component{
	constructor(){
		super();
		this.state = {
			roll:11
		};
	}
	clickHnadle = () =>{
		alert("btn clicked");
		//this.setState({roll : "111"});
		this.setState({roll : this.state.roll + 2});
	}

	render(){
		console.log("PrentStudent render")
		return(
			<div>
				<Mark roll={this.state.roll} />
				<button onClick={this.clickHnadle} >chnage</button>
			</div>
			);
	}
}