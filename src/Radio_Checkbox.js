import React from "react";

export default class Radio_Checkbox extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			radioGroup:{
				one:false,
				two:false,
				three:false
			},
		    checkGroup:{
				one:false,
				two:false,
				three:false
			},
			dropDown:{
				value :"One"
			}
		}
	}


	radioEventHandler =(event)=>{
		let radioGroupTemp = this.state.radioGroup
		// radioGroupTemp.one=false
		// radioGroupTemp.two=false
		// radioGroupTemp.three=false
		
		for(var key in radioGroupTemp)
			radioGroupTemp[key]=false

		radioGroupTemp[event.target.value]= true
		this.setState({radioGroup:radioGroupTemp})
	}


	checkEventHandler =(event)=> {
		let checkGroupTemp = this.state.checkGroup
		checkGroupTemp[event.target.value] = !checkGroupTemp[event.target.value]
		this.setState({checkGroup:checkGroupTemp})
	}

	handleChange = (event)=>{
		this.setState({value : event.target.value})
	}

	render(){
		return(
 
			<div>
				<lable>
					<input type="radio" value="one" onClick={this.radioEventHandler} checked={this.state.radioGroup.one}/>
					One
				</lable>
 				<lable>
					<input type="radio" value="two" onClick={this.radioEventHandler} checked={this.state.radioGroup.two}/>
					Two
				</lable>
				<lable>
					<input type="radio" value="three" onClick={this.radioEventHandler} checked={this.state.radioGroup.three}/>
					Three
				</lable>

 
				<lable>
					<input type="checkbox" value="one" onClick={this.checkEventHandler} checked={this.state.checkGroup.one}/>
					One
				</lable>
 				<lable>
					<input type="checkbox" value="two" onClick={this.checkEventHandler} checked={this.state.checkGroup.two}/>
					Two
				</lable>
				<lable>
					<input type="checkbox" value="three" onClick={this.checkEventHandler} checked={this.state.checkGroup.three}/>
					Three
				</lable>

				<div>
					<lable>
						<select value={this.state.value} onChange={this.handleChange}>
							<option value = "One">One</option>
							<option value = "Two">Two</option>
							<option value = "Three">Three</option>
							<option value = "Four">Four</option>
						</select>
					</lable>
					<lable><input type="text" value= {this.state.value}/></lable>
				</div>
			</div>

			)
	}
}