import React from "react";
import User from "./UserCondition";
import Guest from "./UserCondition2";

export default class UserCondition3 extends React.Component{
	render(){
		const isRegi =this.props.consumer;
		if(isRegi){
			return <User/>
		}
		return <Guest/>

		/*u can use like this ... if isRegi true -> <user> compont render thSE 
		IF isRegi false -> kai j nai aave koi j componet nai show thay 
		const isRegi =this.props.consumer;
		return(
			<div>
			{isRegi && <User/>}
			</div>
			);
			*/
	}
}