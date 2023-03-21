import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickToEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickToEsc);
  }
  clickToEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  clickToOverlay = evt => {
    const { type } = evt.target.dataset;

    if (type === 'overlay' && type !== 'modal') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg, alt } = this.props;
    return (
      <div
        className={css.overlay}
        data-type="overlay"
        onClick={this.clickToOverlay}
      >
        <div className={css.modal} data-type="modal">
          <img src={largeImg} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
