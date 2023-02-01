import React, { Component } from 'react';
import { ModalBackDrop } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <ModalBackDrop>
       {this.props.children}
      </ModalBackDrop>
    );
  }
}
