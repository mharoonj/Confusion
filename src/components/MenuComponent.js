import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, 
    CardTitle } from 'reactstrap';
import DishDetail from "./DishdetailComponent";    

class Menu extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
               <DishDetail selectedDish= {dish} />
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const menu = this.props.dishes.map((dish, index) => {
            return (
              <div key={index}  className="col-12 col-md-5 m-1">
                
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
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