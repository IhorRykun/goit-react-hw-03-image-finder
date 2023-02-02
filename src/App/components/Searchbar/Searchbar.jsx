import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      window.alert('Веддіть текст пошуку');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset() {
    this.setState({
      searchQuery: '',
    });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            onChange={this.handleChange}
            type="text"
            value={searchQuery}
            autoComplete="off"
            placeholder="Search images and photos"
            autoFocus
          />
          <button type="submit">Пошук</button>
        </form>
      </header>
    );
  }
}
