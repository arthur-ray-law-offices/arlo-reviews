import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import Image from "./Image";
import "../index.css";
import a from "../img/a.jpg";
import b from "../img/b.jpg";
import c from "../img/c.jpg";
import d from "../img/d.jpg";
import e from "../img/e.jpg";
import f from "../img/f.jpg";
import g from "../img/g.jpg";
import h from "../img/h.jpg";
import i from "../img/i.jpg";
import j from "../img/j.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      list: [],
      point: 0,
      select: null,
      imgb: true,
      sty: null,
      imgs: [a,b,c,d,e,f,g,h,i,j],
      header: {"display": "block"}
    }
    this.getData = this.getData.bind(this);
    this.comment = this.comment.bind(this);
    this.image = this.image.bind(this);
    this.timer = this.timer.bind(this);
  }
  componentDidMount() {
    if (window.location.href.endsWith("hidden")){
      this.setState({
        "header": {"display": "none"}
      });
    }
    else {
      this.setState({
        "header": {"display": "block"}
      });
    }
    var csvFilePath = require("../reviews.csv");
    var Papa = require("papaparse");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.getData
    });
    this.ticker = setInterval(
      () => this.timer(), 6000
    );
    this.state.imgs.forEach((picture) => {
      new Image().src = picture
    });  
  }
  timer(){
    if (this.state.point==this.state.list.length){
      this.setState({
        point: 0
      });
    }
    else {
      this.setState({
        point: this.state.point+1
      });  
    }
    if (this.state.point%6 == 0 & this.state.imgb){
      this.setState({
        select: this.image(Math.floor(Math.random()*10))
      })
      this.setState({
        imgb: false
      });
    }
    else if (!(this.state.imgb)){
      var len = this.state.list[this.state.point-1].props.content.length;
      var size = 30;
      if (len<=50){
        size = 40;
      }
      else if (len>50 & len<=100){
        size = 35;
      }
      else if (len>100 & len<=150){
        size = 30;
      }
      else if (len>150 & len<=200){
        size = 25;
      }
      else if (len>200 & len<=250){
        size = 20;
      }
      else if (len>250 & len<=300){
        size = 203;
      }
      else if (len>300 & len<=700){
        size = 20;
      }
      else {
        size = 15;
      }
      this.setState({
        select: this.state.list[this.state.point-1],
        imgb: true,
        point: this.state.point-1,
        sty: {"fontSize": size}
      });
    }
    else {
      var len = this.state.list[this.state.point].props.content.length;
      var size = 30;
      if (len<=50){
        size = 40;
      }
      else if (len>50 & len<=100){
        size = 35;
      }
      else if (len>100 & len<=150){
        size = 30;
      }
      else if (len>150 & len<=200){
        size = 25;
      }
      else if (len>200 & len<=250){
        size = 20;
      }
      else if (len>250 & len<=300){
        size = 203;
      }
      else if (len>300 & len<=700){
        size = 20;
      }
      else {
        size = 15;
      }
      this.setState({
        select: this.state.list[this.state.point],
        sty: {"fontSize": size}
      });
    }
    console.log(this.state.point, len, size);
  }
  getData(result) {
    var s = [];
    result.data.forEach(function(element) {
      if(element.disabled == 0){
        s.push(element);
      }
    });
    
    this.setState({
      list: s.map(i => this.comment(i))
    })
    this.timer();
  }
  comment(element) {
    return (
      <Comment
        content={element.content} 
      />
    )
  }
  image(num) {
    return (
      <Image i={this.state.imgs[num]} />
    )
  }
  render() {
    return (
      <div>
        <div className="comment-container theme--light">
          <div className="comments" style={this.state.sty}>
            {this.state.select}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
