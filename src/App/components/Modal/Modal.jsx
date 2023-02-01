import { React } from 'react';
import { MidalContent, ModalBackDrop } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (e.code === 'Escape') {
      this.props.onModalClick();
    }
  }
  onBackDropClick(e) {
    if (e.target === e.currentTarget) {
      this.props.onModalClick();
    }
  }

  render() {
    const { largeImage, alt } = this.props;
    return (
      <ModalBackDrop onClick={this.onBackDropClick}>
        <MidalContent>
          <img src={largeImage} alt={alt} />
        </MidalContent>
      </ModalBackDrop>
    );
  }
}

Modal.prototypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
