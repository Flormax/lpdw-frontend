import './comics.scss';

import React, { Component } from 'react';

export default class ComicsItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      over: false
    }
  }

  componentWillMount(){
    console.log("Will", this.props);
  }

  componentDidMount(){
    console.log("Did", this.props);
  }

  //Using state to change component behavior
  toggleState(){
    this.setState({
      over : !this.state.over
    });
  }

  render() {

    let { className, imageUrl } = this.props;
    let overClass = this.state.over ? 'overlay overlay--over' : 'overlay';

    return (
      <div className="comicsItem"
           onMouseOver={this.toggleState.bind(this)}
           onMouseOut={this.toggleState.bind(this)}>
        <a href="#">
           <img src="http://lorempixel.com/400/200"/>
           <div className="overlay">
             <p>SERIE</p>
             <p>NAME</p>
             <p>PAGE COUNT</p>
           </div>
        </a>
      </div>
    );
  }
}
