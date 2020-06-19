import React from "react";

class ControllForm extends React.Component{
	state={
		value: "roshni"
	}
	render(){
		return(
				<div>
				<form>
					<h2>ControllForm</h2>
					<input type="text" value={this.state.value}/>
				</form>
				</div>
				

			);
	}
}

export default ControllForm;