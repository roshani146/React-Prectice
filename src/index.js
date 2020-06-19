import React from "react";
import ReactDOM from "react-dom";
import  App from "./App";
import Student from "./Student"
import LifeCycleEvent from "./LifeCycleEvent";
import Form from "./Form";
import ComposingComponent2 from "./ComposingComponent2";
import el from "./JsxBabelUse";
import Stu from "./FunctionProps"
import ClassProps1 from "./ClassProps"
import StateExam from "./StateExample"
import Event from "./EventHandling"
import FunctionEvent from "./FunctionEventHandling"
import Statee from "./SetState"
import Mounting from "./Mounting"
import PrentStudent from "./Update"
import Unmounting from "./Unmounting"
import Unmounting2 from "./Unmounting2"
import Radio_Checkbox from './Radio_Checkbox'
import UserCondition3 from './UserCondition3'
import List from "./ListExample"
import ListProp from "./ListExampleProps"
/*import ListState from "./ListExampleState"*/
import KeyApp from "./Key2App"
import InlineCss from"./InlineCss"
import ControllForm from "./ControlledForm"
import C1 from "./ControlledFormExample"
import LiftingState from "./LiftingState"
ReactDOM.render(<LiftingState/>,document.getElementById("root"));
/*ReactDOM.render(<C1/>,document.getElementById("root"));
ReactDOM.render(<ControllForm/>,document.getElementById("root"));*/
/*ReactDOM.render(<InlineCss/>,document.getElementById("root"));*/
/*const arrValues = [10,20,30];
ReactDOM.render(<KeyApp numbers={arrValues}/>,document.getElementById("root"));
*/
/*import KeyState from "./Keys"
ReactDOM.render(<KeyState/>,document.getElementById("root"));
*/
/*
ReactDOM.render(<ListState/>,document.getElementById("root"));
*/

/* 
const arrValues= [10,20,30];
ReactDOM.render(<ListProp numbers={arrValues}/>,document.getElementById("root"));
*/
/*ReactDOM.render(<UserCondition3 consumer={true} />,document.getElementById("root"));*/
/*
ReactDOM.render(<List/>,document.getElementById("root"));
*/
/*
ReactDOM.render(<Radio_Checkbox/>,document.getElementById("root"));
*/
/*let a = <h1>hello rutvi .... kem 6o?  </h1>;	-- jsx		

let b = React.createElement("h1",null,"hiiii");  -- bebal 

ReactDOM.render(a,document.getElementById("root"));
ReactDOM.render(b,document.getElementById("root"));
ReactDOM.render(<Student name="roshni"/>,document.getElementById("root"));
 ReactDOM.render(<Student/>,document.getElementById("root"));

 ReactDOM.render(<Form/>,document.getElementById("root"));
 ReactDOM.render(<ComposingComponent2/>,document.getElementById("root"));
ReactDOM.render(el,document.getElementById("root"));
*/
/*Function props-- pass the name nd roll ->Comonet is (stu)
ReactDOM.render(<Stu name="rosh" roll="11"/>,document.getElementById("root"));
*/

/*Class props -- diff is only using this keyword in Classprops.js file
ReactDOM.render(<ClassProps1 name="rosh" roll="11"/>,document.getElementById("root"));
*/

/*State -- inside class --without constouter 
here we passs the roll props nd StateExample.js -> include the roll props intyo state ...so we can modify 
otherwise props not modify its only readble.... 
state is only use the class componet not use in function component ..
ReactDOM.render(<StateExam  roll="13"/>,document.getElementById("root"));
*/

/* class componet Evnet Hnadling --- 
ReactDOM.render(<Event/>,document.getElementById("root"));
*/
/* Function componet Evnet Hnadling --- 
ReactDOM.render(<FunctionEvent name="rr"/>,document.getElementById("root"));
*/
/*
ReactDOM.render(<Statee/>,document.getElementById("root"));
*/


/*
Mounting
ReactDOM.render(<Mounting/>,document.getElementById("root"));
*/
/* Updating
ReactDOM.render(<PrentStudent/>,document.getElementById("root"));
*/

/* UnMount
ReactDOM.render(<Unmounting/>,document.getElementById("root"));
ReactDOM.render(<Unmounting2/>,document.getElementById("stu"));
ReactDOM.unmountComponentAtNode(document.getElementById("stu"));
ReactDOM.unmountComponentAtNode(document.getElementById("root"));
*/