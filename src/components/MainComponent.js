import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      dishes: DISHES,
      selectedDish: null
    }

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }


  render(){
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu 
            dishes={this.state.dishes}
            onClick={(dishID)=>this.onDishSelect(dishID)}
           />
          {/*<DishDetail selectedDish={this.state.selectedDish} /> this sends all elements of selected dish array*/}

          {/* We only want to send the ID of of the selected dish, so we apply the JS filter() method to extract it 
              from the SelectedDish array. Where it lives as the 1st element [0] in the SelectedDish array

              array.filter( plae_holder_variable_name_for_single_array_item_to_test =>  test_expression)
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
              
              The filter() method creates a new array with all elements that pass the test implemented by the
              provided function.              
              
              */}
              {console.log("Sent from MenuComponent: " + this.state.selectedDish)}
              {console.log(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])}  

          <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> 

                 
      </div>
    );
  }

}



export default Main;
