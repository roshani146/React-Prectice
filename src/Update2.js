import React from "react";

export default class Mark extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			mroll : this.props.roll 
		};
	}
	static getDerivedStateFromProps(props,state)
	{
		console.log("getDerivedStateFromProps called");
		console.log(props,state);
		if(props.roll !== state.mroll){
			return{mroll: props.roll};
		}
		return null;
	}
	shouldComponentUpdate(nextProps, nextState){
		if(this.state.mroll < 15){
			console.log("shouldComponentUpdate");
			console.log(nextProps,nextState);
			return true;
		}
		return false;
	}
	render(){
		console.log("child Mark render");
		return(
			<div>
			<h1>jj{this.state.mroll}</h1>
			</div>
			);
	}
}