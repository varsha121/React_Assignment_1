import React,{Component} from 'react';
import Header from './Header';
import Password from'./Password';
import './Password.css';
import './Progressbar.css';
import Progressbar from './Progressbar';
import Strengthcriteria from './Strengthcrieteria';
import './Strengthcriteria.css';

import './App.css';
 class App extends Component{
   render(){
     return(
       <div>
      <Header/>
      <Password/>
      <Progressbar/>
      <Strengthcriteria/>
      
      </div>
     )
   }
 };
 export default App;

