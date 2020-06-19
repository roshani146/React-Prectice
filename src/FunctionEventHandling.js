import React from "react";

function FunctionEvent(props) {
	function handleClick(e) {
		/*preventDefault is use to break the default behavier like <a > when u click on link then basically this is redirect on wwww.google.com
		but we use preventDefault ..so that when u click on link then it is not going on www.google.com
		*/
		e.preventDefault();
		alert(props.name);
	}
return(
	<div>
		<h1> Hello {props.name}</h1>
		<a href="http://www.google.com" onClick={handleClick}> Click </a>
	</div>
	);
}


export default FunctionEvent;