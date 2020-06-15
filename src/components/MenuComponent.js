import React from 'react';
import { Card, CardImg, CardImgOverlay, /*CardText, CardBody,*/ CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            selectedDish: null
        }   
    }


    onDishSelect(dish){//how to change of the state of a class component
        this.setState({ selectedDish: dish})

    }


    renderDish(dish){
        if(dish != null){
/*
            return(//'top' may be subsitituted for width="100%"
                <Card> 
                    <CardImg width="100%" src={dish.image} alt={dish.name} /> 
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
*/

            return(
            
                <DishDetail selectedDish={this.state.selectedDish} />
                
                )
        }else{

            return(<div></div>)
        }

    }



    render() {
        const menu = this.props.dishes.map((dish) =>{ //note the use of this.props.dishes.map( and not this.state.dishes.map(
            return(//key={dish.id} can be in either the <Card> or the <div>, not both
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card 
                    onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish)} 
            </div>

        );
    }

}

export default Menu;