import './comics.scss';

import React, { Component } from 'react';

export default class ComicsItem extends Component {

  render() {
    return (
      <div className="comicsItem">
        <a href="#">
           <img src="http://lorempixel.com/100/200/"/>
           <div>
             <p>SERIE</p>
             <p>NAME</p>
             <p>PAGE COUNT</p>
           </div>
        </a>
      </div>
    );
  }
}
