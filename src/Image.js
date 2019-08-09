import React from "react";

const sty = {
  "maxWidth":"100%",
  "maxHeight":"100%"
}
export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card v-card v-sheet theme--light elevation-2">
        <div className="wrapper comment">
            <img style={sty} src={this.props.i}/>
        </div>
    </div>
  );
  }
}  

