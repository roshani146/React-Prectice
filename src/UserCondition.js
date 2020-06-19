import React from "react";
export default class User extends React.Component{
	handleClick = () =>{
		alert("Logout")
	}
	render(){
		return(
			<div>
				<h1> hello Roshani </h1>
				<button onClick={this.handleClick}> Logout </button>
			</div>
			)
	}
}