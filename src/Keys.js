
import React from "react";
export default class KeyState extends React.Component{
	state ={
			users: [
				{id: 101, name:"Roshani", pwd:"11"},
				{id: 102, name:"Rosh", pwd:"12"},
				{id: 103, name:"Roni", pwd:"13"},
				],
				isLogged: "RR"
			}
	render(){
		const newUser =this.state.users.map((user)=>{
			return <h1 key={user.id}>ID:{user.id} || Name:{user.name} || Password:{user.pwd}</h1>;
		})
		return(
			<div>{newUser}
			</div>
			)
		}
}

