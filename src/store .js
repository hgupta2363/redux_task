import {createStore} from 'redux';
import reducer from './reducer'
//centrelized datasource
const store=createStore(reducer);
export default store;
