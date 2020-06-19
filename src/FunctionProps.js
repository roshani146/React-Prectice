import React from "react";

/*...............Using Props ........
here  function based props ....in Const stu = props => get the name nd roll value*/
const Stu = props =>{
	return(
		<div>
			<h1> heelo {props.name}</h1>
			<h2> your roll : {props.roll}</h2>
		</div>
	);
};

export default Stu;