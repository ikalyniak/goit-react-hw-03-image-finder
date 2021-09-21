import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onModal();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={this.props.modalImg} alt="this.props.largeImg" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
