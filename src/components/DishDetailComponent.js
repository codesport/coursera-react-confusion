import React from 'react';
import { Card, CardImg, /*CardImgOverlay,*/ CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component{
/*
//Useless constructor. No state being handled here. State management lifted up and handled by MenuComponent.js
//Can this class component can be converted to a function instead?
    constructor (props){
        super(props);
    }
*/

    renderDish(dish){
        return(
            <Card> 
                <CardImg width="100%" src={dish.image} alt={dish.name} /> 
                <CardBody>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>   
        )
    }

    renderComments(comments){
        return(    
                
                <Card> 
                <CardBody>
                    <CardTitle><h4>Comments</h4></CardTitle>
                    <ul className="list-unstyled">
                        {comments.map( (singleComment) =>
                            <li key={singleComment.id}>{singleComment.comment}<br />
                            -- {singleComment.author}, {/*singleComment.date*/}
                            {/*new Date().toLocaleTimeString().format(new Date(Date.parse(comment.date)))*/}
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(singleComment.date)))}<br /><br />
                            </li>
                        )}
                    </ul>
                </CardBody>
                </Card>
        )
    }

    render(){

        if ( this.props.selectedDish ){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1"> 
                            {this.renderDish(this.props.selectedDish) /*selectedDish =name of prop based from MenuComponent.js*/}           
                        </div>

                        <div className="col-12 col-md-5 m-1">  
                            {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        
        } else {

            return(<div></div>)

        }

    }




}


export default DishDetail;