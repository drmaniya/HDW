import React,{Component} from 'react';
import axios from 'axios';
import Tab from './Tab';
const GridItem = (props) => (
  <div className="grid__flex">
    {props.seriesName} {props.venue} {props.matchNumber} {props.homeTeamName} {props.awayTeamName} {props.toss}
  </div>
)



export default class Cards extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      error: null,
      isLoaded: false,
      items: [],
      label:this.props.label,
      id:this.props.id,
    }

  }
 
  componentDidMount() {

    // This is the GraphQL query
    const query = `
    query getMatchSchedule{
    schedule(type:"all",status:"completed"){
    matchID
    startDate
    venue
    matchType
    seriesName
    currentInningsTeamName
    matchStatus
    homeTeamName
    awayTeamName
    seriesID
    statusMessage
    matchNumber
    toss
    isAbandoned
      }
    }
    `;
    console.log(query);
   
    const variables = {};
    
    this.getAnime(query, variables)
  
  }
  getAnime = async (query, variables) => {
    try {
      const response = await axios.post('https://api.devcdc.com/cricket', {
        query,
        variables
      });
  
      // Log the response so we can look at it in the console
      console.log(response.data)
  
      // Set the data to the state
      this.setState(() => ({
        isLoaded: true,
        items: response.data.data.schedule
      }));
  
    } catch (error) {
      // If there's an error, set the error to the state
      this.setState(() => ({ error }))
    }
  }
  render(){
    const { error, isLoaded, items } = this.state;
        return(
    <div>
         <div className="grid">
         {items.map(item => (
      <div key={item.matchID} >    
     <article class="w-90 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div class="tc h2 bb">
        <h6 class="f7 fl">{item.seriesName}</h6>
         <svg class="w1 fr" data-icon="chevronRight" viewBox="0 0 32 32">
        <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
        </svg>
      </div>
      <span class="dib"><h6>{item.matchNumber}&nbsp;&middot;&nbsp;{item.venue}</h6></span>
      <div class="tc mt2">
         <span>
         <img src="http://tachyons.io/img/over-canvas.jpg" class="w3 br3 fl" alt="night sky over land" />
         <h6 class="fl ml2 mt2">{item.homeTeamName}</h6>
         </span><br />
      </div>
     <div class="tc mt4">
         <span>
           <img src="http://tachyons.io/img/over-canvas.jpg" class="w3 br3 fl" alt="night sky over land" />
         <h6 class="fl ml2 mt2">{item.awayTeamName}</h6>
         </span><br />
      </div>
      <div class="ba mt4 br-pill w-90 center h1"> 
         <h6 class="tc f7">{item.toss}</h6>
         
      </div>
    </article>
    </div>
    ))} 
      </div>
   
    </div>
        )
    }
}