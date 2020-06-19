import React from "react";

class Mount2 extends React.Component{

	render(){
		console.log("mounting2 render called");
		return (<h1>Helloooooo {this.props.name} </h1>);
	}
}

export default Mount2;