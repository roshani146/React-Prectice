import React from "react";
class Statee extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			name: "roshani" 
		}
	} 
	handleClick=()=>{
		this.setState({name:"rr"});
	}
	/*
	handleClick=()=>{
		this.setState(function (state,props) {
			alert(state.name)		
		});
	};

	Arrow Function
	
	handleClick=()=>{
		this.setState((state,props)=> {
			alert(state.name)		
		});
	};

	*/
	
	render(){
		return(
			<div>
				<h1> Hello Event {this.state.name} </h1>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
			)
	}
}


export default Statee;