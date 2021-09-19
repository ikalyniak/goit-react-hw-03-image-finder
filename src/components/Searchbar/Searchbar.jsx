import React from 'react';

import styles from './Searchbar.module.css';

export default class Searchbar extends React.Component {
  state = {
    searchInput: '',
  };

  handleInput = event => {
    this.setState({ searchInput: event.currenTarget.value.toLowerCase() });
  };

  handleChange = event => {
    event.preventDefault();

    this.props.Submit(this.state.searchInput);
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
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
