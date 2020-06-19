import React,{ Component } from "react";

/*
== no arrow function  
function Student(){
	return <h1> Hello roshni </h1>
}

== arrow function without props 
const Student = () =>{
	return <h1> helo roshni </h1>;

index.js -> ReactDOM.render(<Student/>,document.getElementById("root"));
	
}



*/
/*using props
	index.js ->ReactDOM.render(<Student name="roshni"/>,document.getElementById("root"));
 */
/*
const Student = props =>{
	return <h1> helo {props.name}</h1>;

}
*/


class Student  extends Component{
	render()
	{
		return <h1>hy roshni</h1>;
	}
}

export default Student;