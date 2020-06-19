import React from "react";
import Mount2 from "./Mounting2";
class Mount extends React.Component{
	constructor(props){
		super(props);
		console.log("constructor called");
		//console.log(props);

		this.state={
			roll: "11" 
		};
	} 

	/*retuen is complesory u can return props or state or null*/
	static getDerivedStateFromProps(props,state)
	{
		console.log("getDerivedStateFromProps called");
		console.log(props,state);
		return null;
	}

	componentDidMount()
	{
		console.log("ComponentDidMount");
	}

	render(){
		console.log("render is called");
		return (
			<div>
			<Mount2  name="rr"/>
			</div>
			);
	}	

}

export default Mount;
///frist callled Constrouctr nd then getDerivedStateFromProps  nd then render method then componetdidmount method

// render method ma child means mounting.js is prent nd mounting2.js is child ..so u caaled render method so sequece of calling is frisr prent render then child render .
