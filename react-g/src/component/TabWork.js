import React,{Component} from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
export default class TabWork extends React.Component{
    
    render(){
        return(
       <div>
       
        <Tabs>
         <div label="upcoming">
         </div>
         <div label="running">
         </div>
         <div label="completed">
         </div>
        </Tabs>
         
         <Tabs>
          <div id="All"></div>
          <div id="International"></div>
          <div id="Domestic"></div>
         </Tabs> 
        
       </div>

        )
    }
}