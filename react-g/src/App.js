import React,{Component} from 'react';
import axios from 'axios';
import TabWork from './component/TabWork';
import Cards from './component/Cards';
export default class App extends React.Component{
  render(){
    return(
      <div class="bg-black-05">
          <h4 class="pv2 ph3">Schedule</h4>
          <TabWork />
           <Cards />
        </div>
    );
  }
}