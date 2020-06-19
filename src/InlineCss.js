import React from "react";
export default class InlineCss extends React.Component{
	render(){
		const btnStyle={
			backgroundColor: "orange"
		}
		const btnS={
			fontSize:"90px"
		}
		return(
			/*if u wnat to give mutiplr css then use ...stylename nd , ...otherstylename nd u can write in line  css like...{color:"bule"}*/
			<div><h1 style={{...btnStyle,...btnS,...{color: "blue"}}}>Button</h1></div>
			)
		}
}