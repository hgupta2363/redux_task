

import React from 'react';
import Component_b from './component_b'
import Component_c from './component_c'
import { Provider } from 'react-redux';
import store from '../store '
class Component_a extends React.Component{

    

  render(){

   return (
    <Provider store={store}>
       <Component_b/>  
       <Component_c/>
       </Provider>
   );



  }


}


export default Component_a;
