import React, { Component } from 'react';
import { ModalBackDrop, MidalContent } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <ModalBackDrop>
       {this.props.children}
      </ModalBackDrop>
    );
  }
}
