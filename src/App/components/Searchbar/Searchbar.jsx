import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import { MdManageSearch } from 'react-icons/md';
export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.currentTarget.value,
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
        <form className={css.formStyle} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            onChange={this.handleChange}
            type="text"
            value={searchQuery}
            autoComplete="off"
            placeholder="Search images and photos"
            autoFocus
          />
          <button className={css.buttonSearch} type="submit">
            <MdManageSearch style={{ width: '30px', height: '30px' }} />
          </button>
        </form>
      </header>
    );
  }
}
