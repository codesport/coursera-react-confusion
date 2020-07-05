import React from 'react';
/*import { Navbar, NavbarBrand } from 'reactstrap';*/
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

//Removed NabBar CSS Selector and placed into HeaderComponent. Added pointers to HeaderCompnent and FooterCompponent
class Main extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      dishes: DISHES, //json arrary of dishes and comments from ../shared/dishes,js.  Simulate DB query
      selectedDish: null
    }

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }


  render(){
    return (
      <div>
          <Header />
          <Menu 
            dishes={this.state.dishes}
            onClick={(dishID)=>this.onDishSelect(dishID)
            /* (1) This is an anonymous function which accepts the "dishID" parameter in its function defintion of "(parameter) => do_something "
             * (2) It then passes the "dishID" parameter as an argument to the onDishSelect function call of "this.onDishSelect(argument)" which mutates
             * state. (3) This state change is then passed to the DishDetailComponent  via this.state.dishes.filter
             *
             */}
           />
          {/*<DishDetail selectedDish={this.state.selectedDish} /> this sends all elements of selected dish array*/}

          {/* We only want to send the ID of of the selected dish, so we apply the JS filter() method to extract it 
              from the SelectedDish array. Where it lives as the 1st element [0] in the SelectedDish array

              array.filter( arbitrary_variable_name_for_single_array_item_to_test =>  test_expression_on_arbitrary_variable_name_for_single_array_item_to_test )
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
              
              The filter() method creates a new array with all elements that pass the test implemented by the
              provided function.              
              
              */}
              {console.log("Sent from MenuComponent to MainComponent: " + this.state.selectedDish)}
              {console.log("Sent to DishDetailComponent: ")}
              {console.log(this.state.dishes.filter( var_to_test => var_to_test.id === this.state.selectedDish)[0])}  

          <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> 
          <Footer />
                 
      </div>
    );
  }

}



export default Main;
