import React, { Component } from 'react'

import ScoreCards from './scorecards';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { scorecardList: [], players:[]};  
}
  scorecardList =[
    {
      "id":"1",
      "scores":[4,5,3,4,3,5,6,4,3,5,6,7,4,6,3,4,5,6],
      "name": "Sam"
    },
    {
      "id":"2",
      "scores":[4,5,3,4,3,5,6,4,3,5,6,7,4,6,3,4,5,6],
      "name": "Sam"
    },
    {
      "id":"3",
      "scores":[4,5,3,4,3,5,6,4,3,5,6,7,4,6,3,4,5,6],
      "name": "Sam"
    },
    {
      "id":"4",
      "scores":[4,5,3,4,3,5,6,4,3,5,6,7,4,6,3,4,5,6],
      "name": "Allan"
    },
    {
      "id":"5",
      "scores":[4,5,3,4,3,5,6,4,3,5,6,7,4,6,3,4,5,6], 
      "name": "Allan"
    },
  ];

  players = [
    {
      "name": "Sam",
      "handicap": 18,
    },
    {
      "name": "Allan",
      "handicap": 7,
    },
  ];

  


 

  //home page render
  render(){
    let scoreCards = this.scorecardList.map(scorecard =>{

      return(
        <div>
          <ScoreCards key= {scorecard.id} scorecard = {scorecard}/>
        </div>
      ) 
    })

    return(
      <div class="grid">{scoreCards}</div>
    )
  }
}
export default Home;
