


import React from 'react';
import store from '../store '

import { connect } from 'react-redux';
function Component_c(props) {

   return(
   
    <ul id="myUL">
     {
        Object.values((props)).map((value)=>{
          return(<li>{value.description}</li>)
        })
    }
        
   
    </ul>
    
   )
   
 
  



  


}
const mapStateToProps = function(state) {
    console.log(state)
    var content=Object.values(state)
  
   
    return content
  }

export default connect(mapStateToProps)(Component_c);
