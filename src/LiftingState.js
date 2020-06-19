import React, {Component} from "react";
import LiftingState2 from "./LiftingState2";

//Here state is pass to other js file using pss the props. becasue state is local so u can not use in othrr js.. 
// Here we return component with object(name)-> pass the state nd LiftingState2.js get this.props.name.

class LiftingState extends Component{
	state = {
		name : "Roshani Prajapati",
		value : 10
	};
	render(){
		return <LiftingState2 name={this.state.name} num={this.state.value}/>;
	}
}

export default LiftingState;