import React from "react";
import ReactDOM from "react-dom";


	

let title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {style:{color:"red"}}, 'Writing some more HTML. Cool stuff!');
const h2 = React.createElement('h2', {}, 'Writing some more HTML. Cool stuff! h2h2h2');

const container = React.createElement('div', {}, [title, paragraph,h2]);

ReactDOM.render(container,document.getElementById("root"));





====================================
import React, {Component} from "react";

class App extends Component{
	render(){
		return( 
		<React.Fragment>
			<h1>hhhh</h1>
			<h2>hskh</h2>
		</React.Fragment>
		);
	}
}

export default App;


======================
import React, {Component} from "react";

class App extends Component{
	render(){
		return( 
		<>
			<h1>hhhh</h1>
			<h2>hskh</h2>
		</>
		);
	}
}

export default App;