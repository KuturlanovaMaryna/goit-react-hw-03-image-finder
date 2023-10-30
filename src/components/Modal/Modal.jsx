import React, { Component } from 'react';
import css from './Modal.module.css';
// import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'auto';
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      return this.props.closeModal();
    }
  };

  handleOverlay = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleOverlay}>
        <div className={css.modal}>
          <img
            className={css.img}
            src={this.props.currentImg}
            alt={this.props.alt}
          />
        </div>
      </div>
    );
  }
}
