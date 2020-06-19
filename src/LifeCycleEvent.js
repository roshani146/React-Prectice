import React from "react"


class LifeCycleEvent extends React.Component{

	constructor(props) {  
      super(props);  
      this.state = {name: "Roshni",count:1};  
      this.changeState = this.changeState.bind(this)  
      this.setNewNumber = this.setNewNumber.bind(this)  
   }
   fun = this.props.fun

   render() {  
      return (  
         <div>  
             <h3>Hello {this.state.count}</h3>  
             <h1>ReactJS component's Lifecycle</h1>  
             <button onClick = {this.setNewNumber} fun="sss" >Click Here!</button>          
         </div>  
      );  
   }

    changeState(){  
      this.setState({name:"Prajapati"});  
   }    

   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  

   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      console.log('should Component Update!') 
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  

	setNewNumber() {
	      this.setState({count: this.state.count + 1})
	   }

	  componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  

 
}


export default LifeCycleEvent;