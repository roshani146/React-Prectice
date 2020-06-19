import React from "react";

class ClassProps1 extends React.Component{
	render(){
		return(
				<div>
					<h1>hy {this.props.name}</h1>
					<h2> roll:{this.roll}</h2>
				</div>
				

			);
	}
}

export default ClassProps1;