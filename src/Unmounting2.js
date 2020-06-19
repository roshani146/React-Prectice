import React from "react";

export default class Unmounting2 extends React.Component{
	componentDidMount(){
		console.log("unmounting 2");
	}

	componentWillUnmount(){
		console.log("unmounting unMount");
	}
	render(){
		return(
			<div>
			<h1>second</h1>
			</div>
			);
	}
}