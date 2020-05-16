import React, {Component} from 'react';

    import { Card, CardImg, CardImgOverlay,
        CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import { Link } from 'react-router-dom';
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
                
                <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            
                  
                    {/* {this.renderDish(this.state.selectedDish)} */}
                
            </div>
        );
    }
}

export default Menu;