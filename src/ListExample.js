/*state={
	user:[
		{id:101,name:"roshani"},
		{id:101,name:"roshani"}
	],
	isLog :flase
};
*/
import React from "react";
export default class List extends React.Component{
	render(){
		const arr =[10, 20, 30, 40, 50]; /*indivisal access mate ->return ( <ul><li> {arr[0]} </li></ul>) aa rite lakhvnu */
		/* map is use to access the every data .. like loop ..map is auto call function that why*/
		/*const newArr = arr.map((num) => {return <li>{num}</li>});
		return(
			<ul>{newArr}</ul>
		)*/
		return(
			<ul>
				{arr.map(num =>{
					return <li>{num}</li>;
				})}
			</ul>
			)
	}
}
