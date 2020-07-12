import React from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends React.Component{

    constructor (props){
        super(props);
        this.state = {//define the default local state here
            isNavOpen: false,
        }
    }

    toggleNav = () =>{
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        })

        console.log('toggleNav functional call - Nav Bar Is Open: ' + this.state.isNavOpen)

    }        

/* OR
    toggleNav =() =>{
        this.setState( prevState => ({
            isNavOpen: !prevState.isNavOpen,
        }));
        console.log('toggleNav functional call - Nav Bar Is Open: ' + this.state.isNavOpen)
    }

*/

 


    render(){

        return(
            <React.Fragment>
                <Navbar dark expand="md"> {/*expand="md" means collapse for medium screen sizes.  TODO: when and why was color="primary" removed?*/}
                    <div className="container">

                    <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        {console.log('Initial Render - Nav Bar Is Open: ' + this.state.isNavOpen)}
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>                                
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )

    }

}


export default Header;