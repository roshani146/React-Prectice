import React from "react"; 
import KeyUser from "./Key2User"
export default class KeyApp extends React.Component{
	 render(){
	  const arr =this.props.numbers;
	  const newArr= arr.map((num)=>{
	  	 return <KeyUser key={num} value={num}/> 
	  	})

	return( <div>{newArr}</div> ) 
	}
}