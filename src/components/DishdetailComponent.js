import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    renderDish(dish) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    renderComments(comments){
        const _comment = comments.map((comment) => {
            return(
                <div>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                            -- {comment.author}, {comment.date}
                        </p>
                    </li>
                </div>
            );
        });
        if(comments==null)
            return(
                <div></div>
            );
        else
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {_comment}
                    </ul>
                </div>
            );
    }


    render(){
        const dish = this.props.selectedDish;
        // console.log(dish);
        if(dish==null){
            return(
                <div></div>
            );
        }
        else{
            const comments = dish.comments;
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(comments)}
                    </div>
                </div>
            );
        }
            
    }

}

export default Dishdetail;