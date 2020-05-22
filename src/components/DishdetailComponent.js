import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from "./CommentForm";




class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
            isModalOpen: false,
            toggleModal: false,
            modal: false
        };
       
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
 
    

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
            <Button className="Primary">Hello</Button>
            </div>
            {comments}
        
            
        
        </div>);
           
    }else
            return(
                <div></div>
            );
    }

    componentDidMount(){
     //   console.log(this.props.comments);
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
       const RenderDish=({dish})=> {
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

      const  RenderComments=(dish)=> {
          
            if (dish != null){
               // console.log(dish);
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
            //console.log(comments);
            return(<div>
                <div>
                <h4>Comments</h4>
                </div>
                {comments}
                <div>
                <Button onClick={this.toggle} outline color="secondary"><span class="fa fa-pencil" aria-hidden="true"></span>
Submit Comment</Button>
                </div>
            </div>);
               
        }else
                return(
                    <div></div>
                );
        }
       
        return (
            <div className="container">
                <CommentForm dishId={this.props.dish.id} addComment={this.props.addComment} toggle={this.toggle} isOpened={this.state.modal} />
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments addComment={this.props.addComment} comments={this.props.comments} />
                    </div>
                </div>
                </div>
        );
    }
}

export default DishDetail;