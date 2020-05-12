import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{

    

    renderComments(dish) {
        if (dish != null){
            
       const comments = dish.comments.map((comment, index)=>{          
          // var date_comment= new Date(comment.date);
           
            return(
                <div key={index}>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
            <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            );
        });
        return(<div>
            <div>
            <h4>Comments</h4>
            </div>
            {comments}
        </div>);
           
    }else
            return(
                <div></div>
            );
    }

    componentDidMount(){
        console.log(this.props.dish);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
    

        return (
            <div className="row">
                
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                      
                    {this.renderComments(this.props.dish)}
                  </div>
                
            </div>
        );
    }
}

export default DishDetail;