import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card v-card v-sheet theme--light elevation-2">
        <div className="header">
            {/*
            <div className="v-avatar avatar" style={{"height": "50px", "width": "50px"}}>
                <img src={this.props.image}/>
            </div>
            <span className="displayName title">{this.props.name}</span>
            <span className="displayName caption">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
            */}
        </div>
        <div className="wrapper comment">
            <p>"{this.props.content}"</p>
        </div>
    </div>
  );
  }
}  

