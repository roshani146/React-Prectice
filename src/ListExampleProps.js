
import React from "react";
export default class ListProp extends React.Component{
	render(){
		const arr =this.props.numbers; /*indivisal access mate ->return ( <ul><li> {arr[0]} </li></ul>) aa rite lakhvnu */
		
		return(
			<ul>
				{arr.map(num =>{
					return <li>{num}</li>;
				})}
			</ul>
			)
	}
}
