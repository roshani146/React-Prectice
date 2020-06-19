import React from "react";
class Event extends React.Component{
	/*
	using this u bind the function nd get this ->object 
	
	constructor(props){
		super(props);
		this.state={
			name: "roshani" 
		}
		this.handleClick= this.handleClick.bind(this);
	}

	if you use only handleClick function then (this) is undifine it is not autobind
	so we manully bind the function using constructor ..... 


	handleClick(){
		console.log("button",this);
	}
	*/


	/*Arrow Function 
	this->object mlase 
	atmotic bind 
	*/
	constructor(props){
		super(props);
		this.state={
			name: "roshani" 
		}
	} 
	handleClick=()=>{
		console.log("button",this);
	}
	
	render(){
		return(
			<div>
				<h1> Hello Event {this.state.name} </h1>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
			)
	}
}


export default Event;