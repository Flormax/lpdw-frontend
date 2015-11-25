import './comics.scss';

import React, { Component } from 'react';
import ComicsItem           from './ComicsItem';

export default class Comics extends Component {

  render() {
    return (
      <div className="comics">
        <ComicsItem />
      </div>
    );
  }
}
