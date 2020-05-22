
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Label } from 'reactstrap';
import { LocalForm, Errors, Control } from "react-redux-form";



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
    constructor(props) {
      super(props);
      this.state = {
        modal: true
      };
      this.handleSubmit = this.handleSubmit.bind(this);

    
    }
    handleSubmit(values) {
        //console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    
    
  
    render() {
      return (
     <div>
          <Modal isOpen={this.props.isOpened} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>Submit Comment</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Row className="form-group">
            <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={12}>
                                            <Control.select model=".rating" name="rating"
                                                className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                            <Row className="form-group">
                                        <Label htmlFor="author" md={12}>Your Name</Label>
                                        <Col md={12}>
                                            <Control.text model=".author" id="author" name="author"
                                                placeholder="Your Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                 />
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                             />
                                        </Col>
                                    </Row>
                                    
                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={12}>Comment</Label>
                                        <Col md={12}>
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                className="form-control" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size:12}}>
                                            <Button type="submit" color="primary">
                                            Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
            </ModalBody>
            
          </Modal>
        </div>
      );
    }
  }

export default CommentForm;