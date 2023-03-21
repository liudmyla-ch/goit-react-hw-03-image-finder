import css from './Searchbar.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmitForm = evt => {
    const { value } = this.state;
    evt.preventDefault();
    if (value.trim() === '') {
      alert('Please, type any words');
      return;
    }
    this.props.onSubmit(value.trim());
  };
  onChangeInput = evt => {
    const value = evt.target.value.toLowerCase();
    this.setState({ value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.onSubmitForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.onChangeInput}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
