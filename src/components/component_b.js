

//conatiner componet 

import React from 'react';
import store from '../store '
class Component_b extends React.Component{

    

  render(){
    
    var input_data;
    // get the data of input textfield
var handleChange=(e)=>
{
  input_data=e.target.value
}
//dispatch the action to reducer  when user click the button
var handleContent=()=>{
  store.dispatch({
    type:"LIST_ADDED",
    payload:{
      description:input_data
    }
  })
 
 
}
  
  

   return (<div id="myDIV" class="header">
  <h2>My To Do List</h2>
 
  <input type="text" id="myInput" placeholder="Title..." name="input" onChange={handleChange} ></input>
  <span onClick={handleContent} class="addBtn">Add</span>

</div>);



  }


}


export default Component_b;
