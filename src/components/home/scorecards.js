import React, {Component} from "react";
import {Card, ListGroup} from "react-bootstrap";

class ScoreCards extends Component{
    

    totalScore(scores){
        let sum = 0;
        let score =0;

        for(let i = 0; i < scores.length + 1; i++){
            score = score[i];
            sum = sum + score;
        }

        return sum;
    }

    render(){
        let{scores,name} = this.props.scorecard;
        let scoreList = scores.map((score, i) =>{
            return(
                <ListGroup.Item> hole {i +1} :  {score}</ListGroup.Item>
            )
        })

        let total = scores.reduce((accumulator, value) =>{
            return accumulator + value;
        }, 0);
        
        //let total = this.totalScore(scores)

        return (
            <div className="grid">
              <Card style={{ width: '20rem' }} className="card" >
                <Card.Body>
                  <div className="cardTitle">
                    <Card.Title>
                      {name}
                    </Card.Title>
                  </div><br></br>
                  
                    <ListGroup>
                        {scoreList}
                    </ListGroup>

                    <div>Total: {total}</div>
 
                </Card.Body>
              </Card>
            </div>
          )
    }


}

export default ScoreCards;