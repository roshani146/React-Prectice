import React from "react";

export default class Unmounting extends React.Component{
	componentDidMount(){
		console.log("unmounting 1");
	}
	render(){
		return(
			<div>
				<h1>frist</h1>
			</div>
			);
	}
}