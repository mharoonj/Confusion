import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  componentDidMount(){
  
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    
  }

  render() {
    return (
      <div>
        
        <Header />
        <div className="container">
        <div className="row">
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        </div>
        
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default Main;