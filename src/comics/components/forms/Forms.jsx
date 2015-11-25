import React, { Component } from 'react';
import { Input, ButtonInput, Row, Col } from 'react-bootstrap';

import './forms.scss';

export default class Forms extends Component {
  render() {
    return (
      <Input label="Name" type="text" ref="name"/>
    );
  }
}
