import { Component } from 'react';
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
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          value={searchQuery}
          autoComplete="off"
          placeholder="search images"
        />
        <button type="submit">Пошук</button>
      </form>
    );
  }
}
