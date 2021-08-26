import React from "react";
import { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

class DishDetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width="100%"
              src={this.props.selectedDish.image}
              alt={this.props.selectedDish.name}
            />
            <CardBody>
              <CardTitle>{this.props.selectedDish.name}</CardTitle>
              <CardText>{this.props.selectedDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          {this.props.selectedDish.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author} , {comment.date}
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default DishDetailComponent;
