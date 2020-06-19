import React from 'react';

export default class Person extends React.Component{

	constructor(props){
		super(props)
		this.name = props.name;
	}
	componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   } 

	render(){
		return <div>{this.props.name} </div>
	}


}