import React from 'react';
/*import { Navbar, NavbarBrand } from 'reactstrap';*/
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom'

//Configuring for react router
class Main extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      dishes: DISHES, //json arrary of dishes and comments from ../shared/dishes,js.  Simulate DB query
    }

  }

  /*
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
*/

  render(){


const HomePage = () => {
  return(
    <Home />

  )

}


    return (
      <div>
          <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} /> {/* If want to pass in prps need t specify it as a menue component*/}
              <Redirect to="/home" />  {/* Undefined rutes will default here */}
            </Switch>
          <Footer />
                 
      </div>
    );
  }

}



export default Main;
