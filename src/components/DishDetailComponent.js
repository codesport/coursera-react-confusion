import React from 'react';
import { Card, CardImg, /*CardImgOverlay,*/ CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish(dish){
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

function RenderComments(comments){/* or {comments} */
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

const  DishDetail = (props) =>{
  //  if ( props.selectedDish ){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1"> 
                        {props.selectedDish && RenderDish(props.selectedDish) /*selectedDish =name of prop based from MenuComponent.js*/}           
                    </div>

                    <div className="col-12 col-md-5 m-1">  
                        {props.selectedDish &&  RenderComments(props.selectedDish.comments)}
                    </div>
                </div>
            </div>
        );

  /*  } else {

        return(<div></div>)

    }*/
}

export default DishDetail;