import React from "react";

class C1 extends React.Component{
	state={
		name:"",
		pwd:""
	};
	/*handleName= (e) =>{
		this.setState({name: e.target.value});
	}
	handlePwd= (e) =>{
		this.setState({pwd: e.target.value});
	}*/
	/*Change = (e) =>{
		this.setState({[e.target.name]:e.target.value});
	you wanna do uppercase...
		const value=e.target.name=="pwd" ? e.target.value.toUpperCase().substr(0,5) : e.target.value;
		this.setState({[e.target.name]:value});
	}*/
	Change = (e) =>{
		this.setState({[e.target.name]:e.target.value});
	}
	handleSubmit = e =>{
		console.log(e);
		e.preventDefault();
	}
	render(){
		return(
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:<input type="text"
						 value={this.state.name}
						 name="name"
						 onChange={this.Change}
						 /*onChange={this.handleName}*//>
					</label>
					<br/><br/>
					<label>
						Pwd:<input type="text"
						value={this.state.pwd} 
						name="pwd" 
						onChange={this.Change}
						/*onChange={this.handlePwd}*//>
					</label><br/><br/>
					<input type="submit" value="Submit"/>
				</form>

			);
	}
}

export default C1;