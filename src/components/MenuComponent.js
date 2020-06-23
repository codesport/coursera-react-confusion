import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends React.Component {

    render() {
        const menu = this.props.dishes.map((dish) =>{ //note the use of this.props.dishes.map( and not this.state.dishes.map(
            return(//key={dish.id} can be in either the <Card> or the <div>, not both
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card 
                    onClick={() => this.props.onClick(dish.id) 
                    /*  Is this receiving or sending the onclick event?  
                        Or is this bi-direction data flow?
                        
                        1. It receives the onClick function and params from parent, MainComponent
                        2. It receives dishes from parent, MainComponent
                        3. It sends dish.id to the parent, MainComponent
                        
                    Default behavior is the parent stores and sends information to children
                    It should be sending the onClick event to the parent MainComponent (which parent sends to DishDetailsComponent)
                    This tells the onClick function what to do by capturing the onClick function (and it resulting ouptut) supplied by MainComponent through the props to deal with the clicking of a menu item                    
                    
                    */}> 
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
            </div>

        );
    }

}

export default Menu;