import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from './ContactComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  
  
//   <div className="row">
//   <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
//   </div>
 

  render() {
    const HomePage = () => {
        return(
            <Home 
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
        );
      }
      const DishWithId = ({match}) => {
        //console.log(this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10)));
        return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };


      const aboutus = () => {
        return <About leaders={this.props.leaders}  />;
      };
    return (
      <div>
        
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/contactus' component= {Contact} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/aboutus' component={aboutus} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));